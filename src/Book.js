import React, { Component } from 'react'
import BookMenu from './BookMenu'

class Book extends Component {
  updateValue = (value, book) => {
    value=value
    this.props.onChangeShelf(book, value)
  }

  render(){
    const value = this.props.value

    return(
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <li key = {book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <BookMenu 
                    id={book.id}
                    value={value}
                    onChange={(event) => this.updateValue(event.target.value, book)}
                  />
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
}

export default Book