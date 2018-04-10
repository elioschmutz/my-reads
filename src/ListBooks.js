import React, { Component } from 'react';

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <nav className="main-navigation navbar navbar-expand-md navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            <h1>MyReads</h1>
          </a>
          <div className="collapse navbar-collapse" id="main-navigation" />
        </nav>
        <div className="container">
          <div className="row my-3">
            <div className="col">
              <button type="button" className="btn btn-secondary float-right">
                <span className="fa fa-plus">&nbsp;</span> Add book
              </button>
            </div>
          </div>
          <div className="row my-3 border-bottom">
            <div className="col">
              <h2>
                <span className="fa fa-clock" /> Currently reading
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-3">
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
                <div className="card-body">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Move to...
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item active" href="#">
                        <span className="fa fa-clock" /> Currently reading
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="fa fa-bookmark" /> Want to read
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="fa fa-check" /> Read
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="fa fa-times" /> None
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3 border-bottom">
            <div className="col">
              <h2>
                <span className="fa fa-bookmark" /> Want to read
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Card title that wraps to a new line
                  </h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3 border-bottom">
            <div className="col">
              <h2>
                <span className="fa fa-check" /> Read
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-3">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Card title that wraps to a new line
                  </h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBooks;
