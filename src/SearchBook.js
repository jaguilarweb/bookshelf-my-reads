import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    isBookInState: PropTypes.func.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    query:'',
    searchBooks: []
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
    this.searching(query);
  }

  clearQuery = () => {
    this.updateQuery('');
  }

  searching = (query) => {
    const { isBookInState } = this.props
    BooksAPI.search(query)
    .then((books) => {
      let booksUpdated = []
      books.map((book) => {
        if(isBookInState(book) !== undefined){
          const bookInList = isBookInState(book)
          book.shelf = bookInList.shelf
        }else{
          book.shelf = 'none'
        }
        booksUpdated.push(book)
        return booksUpdated
      })
      this.setState(() => ({
        searchBooks: booksUpdated
      }))
    })
    .catch(error => alert("Hubo un error " + error))
  }

  render(){
    const { query, searchBooks } = this.state
    const showingBooks = query === ''
      ? []
      : searchBooks.filter((book) => (
        book.title.toLowerCase().includes(query.toLowerCase()) 
        /* book.authors.toLowerCase().filter((author => author.toLowerCase().includes(query.toLowerCase()))) */
      ))

    return(
      <div className="search-books">
        {console.log('Search book '+ this.state.searchBooks.length)}
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
          {showingBooks.length !== 0 && (
            <div className='showing-books'>
              <span>Now showing {showingBooks.length} of {searchBooks.length}</span>
              <button onClick={this.clearQuery}>Clean request </button>
            </div>
          )}
        <div className="search-books-results">
          <Book 
            books={this.props.books}
            displayBooks={showingBooks}
            onChangeShelf={this.props.onChangeShelf}
          />
        </div>
    </div>
    )
  }
}

export default SearchBook