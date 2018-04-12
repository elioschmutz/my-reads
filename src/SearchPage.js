import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import NavigationContainer from './NavigationContainer';

class SearchPage extends Component {
  static propTypes = {
    onMoveBook: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
    loading: PropTypes.string.isRequired,
    onUpdateQuery: PropTypes.func.isRequired
  };
  getEmptyShelfText() {
    return this.props.query === ''
      ? 'Please type in a search string to search books'
      : 'No books found. Change your searchstring';
  }
  render() {
    const { onMoveBook, onUpdateQuery, books, loading } = this.props;
    return (
      <div className="add-books">
        <NavigationContainer>
          <Link className="btn btn-secondary" to="/">
            <span className="fa fa-arrow-left">&nbsp;</span> Back
          </Link>
        </NavigationContainer>
        <div className="row">
          <div className="col">
            <input
              value={this.props.query}
              onChange={event => onUpdateQuery(event.target.value)}
              className="form-control"
              type="search"
              placeholder="Search by title or author"
            />
          </div>
        </div>

        <Shelf
          shelf={{
            title: 'Available books',
            faClass: 'fa-book',
            id: 'available'
          }}
          loading={loading}
          onMoveBook={onMoveBook}
          books={books}
          emptyShelfText={this.getEmptyShelfText()}
        />
      </div>
    );
  }
}

export default SearchPage;
