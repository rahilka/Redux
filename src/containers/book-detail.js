import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {

    return (

      <div>Book Detail!</div>

    )

  }

}

function mapStateToProps(state) {
  // the object that we return from here will be in props in our book detail
  return {

    book: state.activeBook

  };

}

export default connect(mapStateToProps)(BookDetail);
