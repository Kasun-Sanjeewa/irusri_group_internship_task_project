import React from 'react'
import BookShow from './BookShow'

export default function BookList({ bookResult }) {
    console.log(bookResult)
    const bookRender = bookResult.map((book, index) => {
        return <BookShow key={index} book={book} />
    })
    return (
        <div className='cardList'>{bookRender}</div>
    )
}
