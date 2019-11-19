import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
import { connect } from 'react-redux';
class CartConatiner extends Component {
  render() {
    const { carts } = this.props;
    return (
      <div>
        <div>카트</div>
        <table className="cart_product_table">
          {carts.map(cart => (
            <tr key={cart.number}>
              {console.log(cart)}
              <td>
                <Link
                  to={
                    `/shop_detail?product_id=` +
                    cart.id +
                    `?color_name=` +
                    cart.color.name
                  }
                >
                  <img
                    key={cart.number}
                    alt="product_image"
                    width="80px"
                    src={cart.color.image[0]}
                  />
                </Link>
              </td>
              <td>
                <div>
                  <div>{cart.name + ' ' + cart.color.name}</div>
                  <div>가격 : {cart.price} 원</div>
                </div>
              </td>
              <td>수량 : {cart.count}</td>
              <td>합계 : {cart.price * cart.count} 원</td>
            </tr>
          ))}
        </table>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  carts: state.cart.carts
});
export default connect(mapStateToProps)(CartConatiner);
