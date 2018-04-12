import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import { Link } from 'react-router-dom';
import { languages, shelfs } from './config';
import MoveBookButton from './MoveBookButton';
import NavigationContainer from './NavigationContainer';

class BookDetailPage extends Component {
  state = {
    book: this.props.location.state.book
  };

  static propTypes = {
    onMoveBook: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { book } = this.props.match.params;
    if (!book) {
      return;
    }
    console.log(this.props.match.params);
  }

  /**
   * Returns the image url of the book
   * @return {string}
   */
  bookImage() {
    const imageLinks = this.state.book.imageLinks;
    return imageLinks ? imageLinks.smallThumbnail : 'fallback.png';
  }

  /**
   * Returns the shelf title of the current book
   * @return {string}
   */
  readableShelf() {
    const shelf = shelfs.find(s => s.id === this.state.book.shelf);
    return shelf ? shelf.title : '-';
  }

  render() {
    const { onMoveBook } = this.props;
    const { book } = this.state;

    return (
      <div className="book-detail">
        <NavigationContainer>
          <Link className="btn btn-secondary" to="/">
            <span className="fa fa-arrow-left">&nbsp;</span> Back
          </Link>
        </NavigationContainer>

        <div className="row">
          <div className="col col-md-3">
            <img className="card-img" src={this.bookImage()} alt="" />
          </div>

          <div className="col col-md-9">
            <h2>{book.title}</h2>

            <ul>
              <li>Rating: {book.averageRating}</li>
              <li>Shelf: {this.readableShelf(book.shelf)}</li>
              <li>
                Authors:{' '}
                <ul>
                  {book.authors.map(author => <li key={author}>{author}</li>)}
                </ul>
              </li>
              <li>Pages: {book.pageCount}</li>
              <li>Language: {languages[book.language]}</li>
            </ul>

            <p>{book.description}</p>

            <div>
              <MoveBookButton book={book} onMoveBook={onMoveBook} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetailPage;
