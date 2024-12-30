import { useState } from 'react';
import './App.css';
import fetchBooks from './Components/API';
import BookList from './Components/BookList';
import NavBar from './Components/NavBar';

function App() {

  const [bookResult, setBookResult] = useState([]);

  const getResults = async (data) => {
    const results = await fetchBooks(data);
    setBookResult(results.items);
  }
  return (
    <>
      <NavBar getResults={getResults} />
      <BookList bookResult={bookResult} />
    </>
  );
}

export default App;
