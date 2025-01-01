import React from 'react';
import './BookShow.css';

export default function BookShow({ book }) {
    const { title, authors, imageLinks, previewLink, averageRating } = book.volumeInfo;

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {Array(fullStars)
                    .fill(null)
                    .map((_, index) => (
                        <i key={`full-${index}`} className="fas fa-star"></i>
                    ))}
                {halfStar && <i className="fas fa-star-half-alt"></i>}
                {Array(emptyStars)
                    .fill(null)
                    .map((_, index) => (
                        <i key={`empty-${index}`} className="far fa-star"></i>
                    ))}
            </>
        );
    };

    return (
        <div className="card">
            <a href={previewLink} target="_blank" rel="noopener noreferrer">
                <img src={imageLinks?.thumbnail} alt="Book" />
            </a>
            <h3 className="book-title">{title}</h3>
            <p className="book-author">{authors?.join(', ') || 'Unknown Author'}</p>
            {averageRating && <div className="rating">{renderStars(averageRating)}</div>}
        </div>
    );
}
