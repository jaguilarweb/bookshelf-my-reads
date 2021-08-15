import React from 'react'
import * as BooksAPI from './BooksAPI'
import Header from './Header'
import SearchBook from './SearchBook'
import ListBook from './ListBooks'
import Footer from './Footer'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //Call api to fill state
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

    /* Check if new book are in the current books list
    Output:
    - undefined: if the new book is not in the list
    - book: if the new book is in the list to recover the shelf
    This function is also used in SearchBook component*/
  isBookInState = (book) => {
    return this.state.books.find(b => b.id === book.id)
  }

  //https://knowledge.udacity.com/questions/490197
  // I did not use the Response of Api update function

    //Add new book in the list to be displayed
    addBookToList = (book) => {
      let newBooksAdded = this.state.books
        newBooksAdded.push(book)
        this.setState(() => ({
        books: newBooksAdded
      }))
    }

  // Function change the book shelf
  changeShelfBook = (book, shelf) => {
    let booksUpdated = []
    if(this.isBookInState(book) === undefined){
      this.addBookToList(book)
    }
    this.state.books.map((b) => {
      if(b.id === book.id) {
        BooksAPI.update(b, shelf)
        b.shelf = shelf
      }
      booksUpdated.push(b)
      return booksUpdated
    })
    this.setState(() => ({
      books: booksUpdated
    }))
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path='/' render={()=> (
          <ListBook 
            books={this.state.books}
            onChangeShelf={this.changeShelfBook}
          />
          )}
        />
        <Route path='/searchPage' render={() => (
          <SearchBook 
            books={this.state.books}
            onChangeShelf={this.changeShelfBook}
            isBookInState = {this.isBookInState}
            />
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default BooksApp
