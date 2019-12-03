import React, { Component } from 'react';
import ProductList from './ProductList';
import './shop.css';

class ShopContainer extends Component {
  render() {
    const query = this.props.match.params.product_id;
    return (
      <div>
        <div
          style={{
            textAlign: 'left',
            padding: '20px',
            fontWeight: 'bold',
            fontSize: '18px'
          }}
        >
          {query === '0' ? '선글라스' : '안경'}
        </div>
        <ProductList
        // root_url={this.props.location.pathname + this.props.location.search}
        />
      </div>
    );
  }
}

export default ShopContainer;
