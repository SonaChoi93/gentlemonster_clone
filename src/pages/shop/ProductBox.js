import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ColorCircle extends Component {
  render() {
    const { color, active, changeItem } = this.props;
    return (
      <div
        className={`color_circle  ${active && 'on'}`}
        onMouseOver={() => changeItem(color.name, color.image)}
      >
        <span
          className="color_circle_item"
          style={{ backgroundColor: `${color.color_code}` }}
        ></span>
      </div>
    );
  }
}
class ProductBox extends Component {
  state = {
    current_color: this.props.product.colors[0].name,
    currnet_image: this.props.product.colors[0].image
  };
  render() {
    const changeItem = (name, image) => {
      this.setState({
        current_color: name,
        currnet_image: image
      });
    };
    const { product } = this.props;
    const { current_color } = this.state;
    return (
      <div className="wrapper_product_info">
        <div className="product_image">
          <Link
            to={
              `/shop_detail?product_id=` +
              product.id +
              `?color_name=` +
              current_color
            }
          >
            <img
              alt="product_image"
              width="100%"
              src={this.state.currnet_image}
            />
          </Link>
        </div>
        <div className="product_info_box">
          <div className="product_info">
            <div className="product_info">{product.name}</div>
            <div className="product_info">{this.state.current_color}</div>
          </div>
          <div className="wrapper_color_circle">
            {product.colors.map((color, idx) => (
              <ColorCircle
                key={idx}
                color={color}
                active={color.name === this.state.current_color}
                changeItem={changeItem}
              />
            ))}
          </div>
        </div>
        <div>{product.price} 원</div>
      </div>
    );
  }
}

export default ProductBox;
