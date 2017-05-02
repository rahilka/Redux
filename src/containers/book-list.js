// This component is going to render a list of books
import React, { Component } from 'react';

// A container is just react component that has direct connection to the state managed by Redux
// ReactRedux library is used to connect react with redux

export default class BookList extends Component {

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
