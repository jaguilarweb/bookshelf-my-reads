import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookMenu from './BookMenu'

class Book extends Component {
  render(){

    const updateValue = (book, shelf) => {
      this.props.onChangeShelf(book, shelf)
    }

    return(
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <li key = {book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                  { book.shelf === false && ( book.shelf = 'none')}
                  <BookMenu 
                    id={book.id}
                    value={book.shelf}
                    onChange={(event) => updateValue(book, event.target.value)}
                  />
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors.map((author) => (
                <div key={author} className="book-authors">{author}</div>
              ))}
            </div>
          </li>
          ))}
      </ol>
    )
  }
}

Book.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}


export default Book