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

    /**
     * TODO: Use Route (Link)
     */
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
        <Route exact path='/' render={() => (
          <ListBook />
        )} />
        <Route path='/searchPage' component={SearchBook}
        
        />
        <Footer />
      </div>
    )
  }
}

export default BooksApp
