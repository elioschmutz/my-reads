import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Shelf extends Component {
  static propTypes = {
    shelfTitleImageClass: PropTypes.string.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  };

  render() {
    const { shelfTitleImageClass, shelfTitle, books } = this.props;

    return (
      <div className="shelf">
        <div className="row my-3 border-bottom">
          <div className="col">
            <h2>
              <span className={`fa ${shelfTitleImageClass}`} />
              {` ${shelfTitle}`}
            </h2>
          </div>
        </div>
        <div className="row">
          {books.length <= 0 && <span>No books in this shelf</span>}
          {this.props.books.map(book => (
            <div className="col-sm-4 col-md-3" key={book.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Ender's Game</h5>
                  <p className="card-text">Orson Scott Card</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Shelf;
