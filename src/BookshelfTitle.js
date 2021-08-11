import React from 'react'
import PropTypes from 'prop-types'

// https://reactjs.org/docs/composition-vs-inheritance.html
// props.children
function BookshelftTitle (props) {

  return (
      <h2 className="bookshelf-title">
        {props.title}
      </h2>
  )
}

BookshelftTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default BookshelftTitle;