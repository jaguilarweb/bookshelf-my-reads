import React from 'react'
import * as BooksAPI from './BooksAPI'
import Header from './Header'
import SearchBook from './SearchBook'
import ListBook from './ListBooks'
import Footer from './Footer'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: {},
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

// Im need use this lifecicle events to fetch API
/*   componentDidMount(){
    BooksAPI.getAll()
    .then(()=>{
      this.setState(() => ({
        books
      }))
    })
  } */


  render() {
    return (
      <div className="app">
        <Header />
        {this.state.showSearchPage ? (
          <SearchBook />
        ) : (
          <ListBook />
          )}
        <Footer />
      </div>
    )
  }
}

export default BooksApp
