import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookMenu from './BookMenu'

class Book extends Component {
  static propTypes = {
    displayBooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render(){
    const { displayBooks } = this.props
    if(displayBooks !== undefined){
      return(
        <ol className="books-grid">
          {displayBooks.map((book) => (
            <li key = {book.id}>
              <div className="book">
                <div className="book-top">
                {book.imageLinks.smallThumbnail !== undefined && (
                  <div className="book-cover" 
                    style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}>
                  </div>)}
                  <div className="book-shelf-changer">
                    <BookMenu
                      book={book}
                      value={book.shelf}
                      onChange={this.props.onChangeShelf}
                    />
                  </div>
                </div>
                {book.hasOwnProperty('title')  && (<div className="book-title">{book.title}</div>)}
                {book.hasOwnProperty('authors')  && (book.authors.map((author) => (
                  <div key={author} className="book-authors">{author}</div>
                )))}
              </div>
            </li>
          ))}
        </ol>
      )
    }
  }
}

export default Book
