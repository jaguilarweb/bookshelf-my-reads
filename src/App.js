import React from 'react'
import * as BooksAPI from './BooksAPI'
import Header from './Header'
import SearchBook from './SearchBook'
import ListBook from './ListBooks'
import Footer from './Footer'
import './App.css'
import { Route } from 'react-router-dom'
import Book from './Book'

class BooksApp extends React.Component {
  state = {
    books: []
  }
// I need to use this lifecicle events to fetch API
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  changeShelfBook = (id, shelf) => {
    this.setState((currentState) => ({
      books: currentState.books.map((b)=>{
        if(b.id === id){
          console.log(`${b.id} y ${id}`)
          console.log(`${shelf}`)
          console.log(`${b.shelf}`)
          b.shelf = shelf
        }
      })
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
