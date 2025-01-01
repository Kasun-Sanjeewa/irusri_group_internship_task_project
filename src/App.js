import { useEffect, useState } from 'react';
import './App.css';
import fetchBooks from './Components/API';
import BookList from './Components/BookList';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import axios from 'axios';

const API_URL = 'http://localhost:3001/favourites';

function App() {
  const [bookResult, setBookResult] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [searchTerm, setSearchTerm] = useState(''); // Current search term
  const [page, setPage] = useState(0); // Pagination
  const [hasMore, setHasMore] = useState(false); // More books available
  const [favourites, setFavourites] = useState([]); // Favorites
  const [isFavoritesView, setIsFavoritesView] = useState(false); // Toggle views

  // Fetch favorite books from the JSON server on initial load
  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(API_URL);
      setFavourites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  // Get search results based on the query
  const getResults = async (searchQuery) => {
    setSearchTerm(searchQuery);
    setPage(0);
    setBookResult([]);
    setHasMore(true);
    setIsFavoritesView(false); // Switch to search results view
    await loadBooks(searchQuery, 0);
  };

  // Load books based on search query and pagination
  const loadBooks = async (searchQuery, startIndex) => {
    setLoading(true);
    const data = await fetchBooks(searchQuery, startIndex);
    if (data && data.items) {
      setBookResult((prevBooks) => [...prevBooks, ...data.items]);
      setHasMore(data.items.length === 20);
    }
    setLoading(false);
  };

  // Load more books when scrolling down
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadBooks(searchTerm, nextPage * 20);
  };

  // Add book to favorites (handled by JSON server)
  const addToFavourites = async (book) => {
    if (!favourites.find((favBook) => favBook.id === book.id)) {
      try {
        await axios.post(API_URL, book);
        setFavourites((prevFavorites) => [...prevFavorites, book]);
      } catch (error) {
        console.error('Error adding to favorites:', error);
      }
    }
  };

  // Delete book from favorites
  const deleteFromFavourites = async (bookId) => {
    try {
      await axios.delete(`${API_URL}/${bookId}`);
      setFavourites(favourites.filter((favBook) => favBook.id !== bookId));
    } catch (error) {
      console.error('Error deleting from favorites:', error);
    }
  };



  // Toggle to view favorites
  const handleShowFavorites = () => {
    setIsFavoritesView(true); // Switch to favorites view
  };

  return (
    <>
      <NavBar getResults={getResults} showFavorites={handleShowFavorites} />

      {isFavoritesView ? (
        <BookList bookResult={favourites} onDeleteFavourite={deleteFromFavourites} isFavoritesView={isFavoritesView} />
      ) : (
        <>
          {bookResult.length === 0 && (
            <div className="empty-state">
              <div className="empty-background">
                <div className="quote">
                  <p>"A room without books is like a body without a soul." - Marcus Tullius Cicero</p>
                  <h1>Find Your Book Here...</h1>
                </div>
              </div>
            </div>
          )}

          <BookList bookResult={bookResult} onAddFavourite={addToFavourites} isFavoritesView={isFavoritesView} />

          {hasMore && !loading && (
            <button className="see-more-button" onClick={handleLoadMore}>
              See More
            </button>
          )}
        </>
      )}

      {bookResult.length > 0 && !isFavoritesView && <Footer />}
    </>
  );
}

export default App;
