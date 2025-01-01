import { useState } from 'react';
import './App.css';
import fetchBooks from './Components/API';
import BookList from './Components/BookList';
import NavBar from './Components/NavBar';

function App() {
  const [bookResult, setBookResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);


  const getResults = async (searchQuery) => {
    setSearchTerm(searchQuery);
    setPage(0);
    setBookResult([]);
    setHasMore(true);
    await loadBooks(searchQuery, 0);
  };


  const loadBooks = async (searchQuery, startIndex) => {
    setLoading(true);
    const data = await fetchBooks(searchQuery, startIndex);
    if (data && data.items) {
      setBookResult((prevBooks) => [...prevBooks, ...data.items]);
      setHasMore(data.items.length === 20);
    }
    setLoading(false);
    setHasMore(true);
  };


  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadBooks(searchTerm, nextPage * 20);
  };

  return (
    <>
      <NavBar getResults={getResults} />
      <BookList bookResult={bookResult} />
      {hasMore && !loading && (
        <button className="see-more-button" onClick={handleLoadMore}>
          See More
        </button>
      )}
    </>
  );
}

export default App;
