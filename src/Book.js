import React, { Component } from 'react'
import BookMenu from './BookMenu'

class Book extends Component {
  // cambiar el value para que desde search tambien tenga
  //los valores por defecto
  render(){
    let value = this.props.value;
    const updateValue = (shelf, book) => {
      value=shelf
      this.props.onChangeShelf(book, value)
    }

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
                    value={book.shelf}
                    onChange={(event) => updateValue(event.target.value, book)}
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