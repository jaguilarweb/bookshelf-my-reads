import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookMenu extends Component{
  handleChange = (event) => {
    event.preventDefault()
    this.props.onChange(this.props.book, event.target.value)
  }

  render(){
    return(
        <select value={this.props.value} onChange={this.handleChange}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read" >Read</option>
            <option value="none">None</option>
        </select>
    )
  }
}

BookMenu.propTypes = {
  book: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default BookMenu
