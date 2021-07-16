import React, { Component } from 'react'
import BookMenu from './BookMenu'

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  //Como le doy valor a value, sin asignarle el valor al state desde prop

  handleChange(event) {
    event.preventDefault()
    this.setState({value: event.target.value});
  }
  
  
  changeValue = (shelf) => {
    this.setState({value: shelf})
  }

  render(){
    return(
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <li key = {book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <BookMenu 
                    id={book.id}
                    value={this.state.value} 
                    onChangeValue={this.handleChange}
                  />
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors[0]}</div>
            </div>
          </li>
          ))}
      </ol>
    )
  }
}

export default Book