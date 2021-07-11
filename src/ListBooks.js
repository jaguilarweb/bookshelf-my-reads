import React, { Component } from 'react'
import BookshelftTitle from './BookshelfTitle'
import Book from './Book'
import { Link } from 'react-router-dom'

class ListBook extends Component {

  render(){
  // Filter result of shelft
  const allBooks = this.props.books.map(book =>  book.shelf)
  const shelfUnic = allBooks.filter((item, index) => (
    allBooks.indexOf(item) === index
  ))

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
          break;
      }
    return title
  }

  const bookListPerShelf = (shelf) => {
    const filter = []
    this.props.books.map((book) => {
      if(shelf === book.shelf){
        filter.push(book)
      }
      return filter
    })
    return filter
  } 

    return(
      <main className="list-books">
        <div className="list-books-content">
          <div>
            {shelfUnic.map((item, index) => {
              return(
                  <div key={index} className="bookshelf">
                    <BookshelftTitle  title={asignTitle(item)} />,
                    <div className="bookshelf-books">
                        <Book books={bookListPerShelf(item)}/>
                    </div>
                  </div>
              )}
            )}
          </div>
        </div>
        <Link to='/searchPage'>
          <div className="open-search">
              <button>Add a book</button>
          </div>
        </Link>
        </main>
    )
  }
}

export default ListBook