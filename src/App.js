import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="main-navigation navbar navbar-expand-md navbar-dark bg-primary">
          <a class="navbar-brand" href="/">
            <h1>MyReads</h1>
          </a>
          <div class="collapse navbar-collapse" id="main-navigation" />
        </nav>
        <div class="container">
          <div class="row my-3">
            <div class="col">
              <button type="button" class="btn btn-secondary float-right">
                <span class="fa fa-plus">&nbsp;</span> Add book
              </button>
            </div>
          </div>
          <div class="row my-3 border-bottom">
            <div class="col">
              <h2>
                <span class="fa fa-clock" /> Currently reading
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 col-md-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Ender's Game</h5>
                  <p class="card-text">Orson Scott Card</p>
                </div>
                <div class="card-body">
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Move to...
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item active" href="#">
                        <span class="fa fa-clock" /> Currently reading
                      </a>
                      <a class="dropdown-item" href="#">
                        <span class="fa fa-bookmark" /> Want to read
                      </a>
                      <a class="dropdown-item" href="#">
                        <span class="fa fa-check" /> Read
                      </a>
                      <a class="dropdown-item" href="#">
                        <span class="fa fa-times" /> None
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row my-3 border-bottom">
            <div class="col">
              <h2>
                <span class="fa fa-bookmark" /> Want to read
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 col-md-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Card title that wraps to a new line
                  </h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-md-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row my-3 border-bottom">
            <div class="col">
              <h2>
                <span class="fa fa-check" /> Read
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 col-md-3">
              <div class="card">
                <img
                  class="card-img-top"
                  src="./dummy.png"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    Card title that wraps to a new line
                  </h5>
                  <p class="card-text">
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

export default App;
