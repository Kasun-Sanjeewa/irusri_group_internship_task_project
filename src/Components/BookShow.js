import React from 'react'
import './BookShow.css'

export default function BookShow({ book }) {
    return (
        <div className='card'>
            <img src={book.volumeInfo.imageLinks.thumbnail} />
            <p>{book.volumeInfo.title}</p>
        </div>
    )
}
