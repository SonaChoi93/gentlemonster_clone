import React, { Component } from 'react';
import qs from 'qs';

class ShopContainer extends Component {
  render() {
    const query = qs.parse(this.props.location.search.substr(1));
    return <div>{query.ca_id}</div>;
  }
}

export default ShopContainer;
