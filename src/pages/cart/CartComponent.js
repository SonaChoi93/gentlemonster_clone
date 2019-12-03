import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartComponent extends Component {
  render() {
    const { carts, deleteCard } = this.props;
    return (
      <table className="cart_product_table">
        <tbody>
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
                  <div style={{ fontSize: '9px', marginBottom: '20px' }}>
                    가격 : {cart.price} 원
                  </div>
                  <div
                    className="btn_mini_delete"
                    onClick={() => deleteCard(cart.number)}
                  >
                    삭제
                  </div>
                </div>
              </td>
              <td>수량 : {cart.count}</td>
              <td style={{ fontWeight: 'bold' }}>
                합계 : {cart.price * cart.count} 원
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default CartComponent;
