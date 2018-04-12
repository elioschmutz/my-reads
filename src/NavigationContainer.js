import React, { Component } from 'react';

class NavigationContainer extends Component {
  render() {
    return (
      <div className="row my-3">
        <div className="col">{this.props.children}</div>
      </div>
    );
  }
}

export default NavigationContainer;
