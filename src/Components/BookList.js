import React from 'react';
import BookShow from './BookShow';

export default function BookList({ bookResult, onAddFavourite, onDeleteFavourite, isFavoritesView }) {
    if (!bookResult || bookResult.length === 0) {
        return <p>No books available.</p>; // Return early if no books
    }

    const bookRender = bookResult.map((book, index) => (
        <BookShow
            key={index}
            book={book}
            onAddFavourite={onAddFavourite}
            onDeleteFavourite={onDeleteFavourite}
            isFavoritesView={isFavoritesView}
        />
    ));

    return <div className="cardList">{bookRender}</div>; // Render the list of books
}
