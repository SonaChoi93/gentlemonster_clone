import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
import { connect } from 'react-redux';
import { deleteCard } from '../../store/modules/cart';
class CartConatiner extends Component {
  render() {
    const { carts, deleteCard } = this.props;
    return (
      <div>
        <div>카트</div>
        <table className="cart_product_table">
          {carts.map(cart => (
            <tr key={cart.number}>
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
                  <button onClick={() => deleteCard(cart.number)}>삭제</button>
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
const mapDispatchToProps = dispatch => ({
  deleteCard: number => dispatch(deleteCard(number))
});
export default connect(mapStateToProps, mapDispatchToProps)(CartConatiner);
