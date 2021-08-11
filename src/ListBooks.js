import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookshelftTitle from './BookshelfTitle'
import Book from './Book'
import { Link } from 'react-router-dom'

class ListBook extends Component {

  render(){
  // Filter result of shelf
  console.log('list book ' + this.props.books.length)

  // Recolect shelf name and create array not duplicated names
  const allBooks = this.props.books.map(book => book.shelf)
  const shelfUnic = [...new Set(allBooks)]

  const asignTitle=(shelf)=> {
    let title= '';
      switch (shelf) {
        case 'currentlyReading':
          title = 'Currently Reading'
          break;
        case 'wantToRead':
          title = 'Want to Read'
          break;
        case 'read':
          title = 'Read'
          break;
        default:
          title = false
          break;
      }
    return title
  }

  const bookListPerShelf = (shelf) => {
    const booksPerShelf = []
    this.props.books.map((book) => {
      if(shelf === book.shelf){
        booksPerShelf.push(book)
      }
      return booksPerShelf
    })
    return booksPerShelf
  } 
// Evitar que se dupliquen los resultados.
    return(
      <main className="list-books">
        <div className="list-books-content">
          <div>
            {shelfUnic.map((shelf) => {
              return(
                  <div key={shelf} className="bookshelf">
                    <BookshelftTitle  title={asignTitle(shelf)} />
                      {shelf !== 'none' && (
                        <div className="bookshelf-books">
                            <Book 
                              books={bookListPerShelf(shelf)}
                              value={shelf}
                              onChangeShelf={this.props.onChangeShelf}
                            />
                        </div>
                      )}
                  </div>
              )//fin return
              }
            )// fin map
          }
          </div>
        </div>
        <Link to='/searchPage'>
          <div className="open-search">
              <button>Add a book</button>
          </div>
        </Link>
        </main>
    )//Fin return main
  }//Fin Render
}// Fin Class

ListBook.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default ListBook