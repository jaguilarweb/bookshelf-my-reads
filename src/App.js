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
// I need to use this lifecicle events to fetch API
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      console.log(`Did Mount. Total books ${books.length}`)
      this.setState(() => ({
        books: books
      }))
    })
  }

  //https://knowledge.udacity.com/questions/490197
  changeShelfBook = (book, shelf) => {
    console.log(`changeShelf ${book.id} shelf ${shelf}`)
    let booksUpdated = []
    this.state.books.map((b)=>{
        if(b.id === book.id) {
          //BooksAPI.update(book, shelf)
          b.shelf = shelf
        }//Fin if
      booksUpdated.push(b)
    })
    this.setState(() => ({
      Books: booksUpdated
    }))//Fin setState
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
