import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="wrapper_product">
          <div className="product_collection_image">collection main image</div>
          <div className="wrapper_product_info">
            <div className="product_image">product image</div>
            <div classNmae="project_info_box">product info</div>
          </div>
          <div className="wrapper_product_info">
            <div className="product_image">product image</div>
            <div classNmae="project_info_box">product info</div>
          </div>
        </div>
        <div className="wrapper_product">
          <div className="wrapper_product_info">
            <div className="product_image">product image</div>
            <div classNmae="project_info_box">product info</div>
          </div>
          <div className="wrapper_product_info">
            <div className="product_image">product image</div>
            <div classNmae="project_info_box">product info</div>
          </div>
          <div className="wrapper_product_info">
            <div className="product_image">product image</div>
            <div classNmae="project_info_box">product info</div>
          </div>
          <div className="wrapper_product_info">
            <div className="product_image">product image</div>
            <div classNmae="project_info_box">product info</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
