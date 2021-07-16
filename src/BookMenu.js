import React, { Component } from 'react'

//From here I can not keep the changes to see them on search page
class BookMenu extends Component{
  render(){
    return(
        <select value={this.props.value} onChange={this.props.onChange}>
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
