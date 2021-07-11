import React from 'react'
import BookMenu from './BookMenu'

const Book = (props) => {
  return(
    <ol className="books-grid">
      {props.books.map((book) => (
        <li key = {book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
              <div className="book-shelf-changer">
                <BookMenu shelf={book.shelf}/>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors[0]}</div>
          </div>
        </li>
        ))}
    </ol>
  )

}

export default Book