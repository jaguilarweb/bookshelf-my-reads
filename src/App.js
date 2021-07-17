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
        books: books
      }))
    })
  }

  //https://knowledge.udacity.com/questions/490197
  // I did not use the Response of Api update function
  changeShelfBook = (book, shelf) => {
    let booksUpdated = []
    this.state.books.forEach((b)=>{
        if(b.id === book.id) {
          BooksAPI.update(b, shelf)
          b.shelf = shelf
        }
      booksUpdated.push(b)
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
            />
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default BooksApp
