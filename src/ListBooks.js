import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookshelftTitle from './BookshelfTitle'
import Book from './Book'
import { Link } from 'react-router-dom'

class ListBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }
//Seguir con el manejo de errores (recordar que dejè la api enviando un error)
  render(){
    console.log("ListBooks "+ this.props.books.length)
    if(this.props.books.length === 0){
      return(
        <div>
          <h3>There are not books</h3>
          <p>Try to refresh the Page</p>
        </div>
      )
    }
  // Filter result of shelf
  // Recolect shelf name and create array not duplicated names
  const arrayShelvesName = this.props.books.map(book => book.shelf)
  const shelfUnic = [...new Set(arrayShelvesName)]

  // Asign title to the shelf
  const asignTitle = (shelf) => {
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
          break;
      }
    return title
  }
// Books are listed by shelf
  const bookListPerShelf = (shelf) => {
    let booksPerShelf = this.props.books.filter((book) => {
      return book.shelf === shelf
  })
    return booksPerShelf
  } 

    return(
      <main className="list-books">
        <div className="list-books-content">
          <div>
            {shelfUnic.map((shelf) => shelf !== 'none' &&
            (
              <div key={shelf} className="bookshelf">
                {console.log(shelf)}
                <BookshelftTitle  title={asignTitle(shelf)} />
                    <div className="bookshelf-books">
                        <Book
                          books={this.props.books}
                          displayBooks={bookListPerShelf(shelf)}
                          onChangeShelf={this.props.onChangeShelf}
                        />
                    </div>
              </div>
            )
            )//End Map
          }
          </div>
        </div>
        <Link to='/searchPage'>
          <div className="open-search">
              <button>Add a book</button>
          </div>
        </Link>
        </main>
    )//End return main
  }//End Render
}// End Class


export default ListBook