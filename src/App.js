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
    loading: true,
    error: null,
    books: []
  }

  //Call api to fill state
  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })
    try {
      const books = await BooksAPI.getAll()
      this.setState({ loading: false, books: books })
    } catch (error){
      this.setState({ loading: false, error: error })
    }
  }

  changeError = (error) => {
    this.setState({error: error})
  }

    /* Check if new book are in the current books list
    Output:
    - undefined: if the new book is not in the list
    - book: if the new book is in the list to recover the shelf
    This function is also used in SearchBook component*/
  isBookInState = (book) => {
    return this.state.books.find(b => b.id === book.id)
  }

  // Function change the book shelf
  changeShelfBook = (book, shelf) => {
    this.setState((currentState) => {
      let booksUpdated = []
      let newBookState = []
      if (this.isBookInState(book) === undefined){
        booksUpdated = [...currentState.books, book]
      }else{
        booksUpdated = currentState.books
      }
      booksUpdated.map((b) => {
          if(b.id === book.id) {
            BooksAPI.update(b, shelf)
            b.shelf = shelf
          }
          newBookState.push(b)
          return newBookState
        })
      return {books: newBookState}
    })
  }

  render() {
    if(this.state.loading === true){
      return <div className='loading'>Loading...</div>
    }
    if(this.state.error){
      return <div className='error'>Error: {this.state.error.message}</div>
    }
    return (
      <div className="app">
        <Header />
        <Route exact path='/' render={() => (
          <ListBook 
            books={this.state.books}
            onChangeShelf={this.changeShelfBook}
          />
          )}
        />
        <Route path='/search' render={() => (
          <SearchBook 
            books={this.state.books}
            error={this.state.error}
            onChangeShelf={this.changeShelfBook}
            isBookInState = {this.isBookInState}
            changeError={this.changeError}
            />
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default BooksApp
