import React, { Component } from 'react'

//From here I can not keep the changes to see them on search page
class BookMenu extends Component{
  state = {
    value: 'wantToRead'
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render(){
    
    return(
        <select value={this.state.value} onChange={this.handleChange}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read" >Read</option>
            <option value="none">None</option>
        </select>
    )
  }
}

export default BookMenu
