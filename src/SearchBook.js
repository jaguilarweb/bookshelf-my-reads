import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'

//TODO: search function
//TODO: route back function

class SearchBook extends Component {
  state = {
    query:''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query:query.trim()
    }))
  }
  clearQuery = () => {
    this.updateQuery('');
  }

  render(){
    const { query } = this.state
    const { books } = this.props

    const showingBooks = query === ''
      ? books
      : books.filter((book) => (
        book.title.toLowerCase().includes(query.toLowerCase())
      ))
      
    const value = '';

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search" >Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value) }
            />
          </div>
        </div>
          {showingBooks.length !== books.length && (
            <div className='showing-books'>
              <span>Now showing {showingBooks.length} of {books.length}</span>
              <button onClick={this.clearQuery}>Show all </button>
            </div>
          )}
        <div className="search-books-results">
          <Book 
            books={showingBooks}
            value={value}
            onChangeShelf={this.props.onChangeShelf}
          />
        </div>
    </div>
    )
  }
}

export default SearchBook