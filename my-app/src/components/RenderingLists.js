import React from 'react'
import Book from './Book.js'

function RenderingLists() {
    const BookList = [
        'Book 1',
        'Book 2',
        'Book 3'
    ]

    const books = [
        {
            title: 'Book 1',
            author: 'Liene',
            pages: 23
        },
        {
            title: 'Book 2',
            author: 'Liene 2',
            pages: 24
        },
        {
            title: 'Book 3',
            author: 'Liene 3',
            pages: 25
        }
    ]

    return (
        <div>
            {BookList.map(item => {
                return <h2 key={item}>{item}</h2>
            })}
            <hr />
            {
                books.map(book => {
                    return (
                        <div key={book.title}>
                            <h5>{book.title}</h5>
                            <p>{book.author}</p>
                            <p>{book.pages}</p>
                        </div>
                    )
                })
            }
            <hr />
            {
                books.map(book => {
                    return <Book key={book.title} book={book} />
                })
            }
        </div>
    )
}

export default RenderingLists