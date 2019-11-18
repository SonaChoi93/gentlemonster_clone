import React, { Component } from 'react';
import qs from 'qs';
import ProductList from './ProductList';
import './shop.css';

class ShopContainer extends Component {
  render() {
    const query = qs.parse(this.props.location.search.substr(1));
    return (
      <div>
        <div
          style={{
            backgroundColor: 'pink',
            textAlign: 'left',
            padding: '20px'
          }}
        >
          {query.ca_id === '0' ? '선글라스' : '안경'}
        </div>
        <ProductList
        // root_url={this.props.location.pathname + this.props.location.search}
        />
      </div>
    );
  }
}

export default ShopContainer;
