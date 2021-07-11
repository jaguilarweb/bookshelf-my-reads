import React from 'react'

// https://reactjs.org/docs/composition-vs-inheritance.html
// props.children
function BookshelftTitle (props) {

  return (

      <h2 className="bookshelf-title">
        {props.title}
      </h2>

  )
}

export default BookshelftTitle;