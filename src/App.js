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
// Im need use this lifecicle events to fetch API
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path='/' render={()=> (
          <ListBook books={this.state.books}/>
          )}
        />
        <Route path='/searchPage' render={() => (
          <SearchBook books={this.state.books}/>
          )}
        />
        <Footer />
      </div>
    )
  }
}

export default BooksApp
