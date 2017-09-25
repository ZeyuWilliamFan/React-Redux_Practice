import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key = {book.title}
          onClick={() => this.props.selectBookMethod(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever returned will show up as props of BookList
  return {
    books:state.bookss
  };
}

//The return value of thie function will end up as props in BookList
// container.
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed
  // to all of our reducers.
  return bindActionCreators({ selectBookMethod: selectBook }, dispatch)
}
// Promote BookList from component to a container - needs to know
// about this dispatch method, selectBook. Pass it into props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
