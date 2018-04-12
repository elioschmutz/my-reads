import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loading } from './config';

class Spinner extends Component {
  static propTypes = {
    loading: PropTypes.string.isRequired
  };
  static defaultProps = {
    loading: loading.loading
  };
  render() {
    if (this.props.loading !== loading.loading) {
      return null;
    }
    return (
      <span className="float-right">
        <i className="fa fa-spinner fa-spin" />
      </span>
    );
  }
}

export default Spinner;
