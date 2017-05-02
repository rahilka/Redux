// This component is going to render a list of books
import React, { Component } from 'react';

// A container is just react component that has direct connection to the state managed by Redux
// ReactRedux library is used to connect react with redux
// React and Redux are completely separate libraries

// Which component do we want to return into a container?
// In general, we want the most parent component that cares about a particular piece of state to be the container

// 'App' component doesn't care about the list of books, only BookList does
// And BookDetail cares only about the active book
// App only cares bout render the other components on the page

// We only create containers from components that care about a particular piece of state
// Container = smart component

import { connect } from 'react-redux';

class BookList extends Component {

  renderList() {

    return this.props.books.map((book) => {

      return (

        <li key={book.title} className="list-group-item">{book.title}</li>

      );

    });

  }

  render () {

    return (

      <ul className="list-group col-sm-4" >

        {this.renderList()}

      </ul>

    )


  }

}

// If the state ever changes, this container will instantly rerender with the new list of books
function mapStateToProps(state) {
  // 'state' contains the array of books and the active book
  // Whatever is returned from here will show up as 'props' inside of BookList

  return {

    books: state.books

  };

}


// Use the connection function: take the component, take the mapStateToProps function and return a container

export default connect(mapStateToProps)(BookList);
