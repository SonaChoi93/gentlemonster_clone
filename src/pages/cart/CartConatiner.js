import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cart.css';

const carts = [
  {
    image:
      'https://www.gentlemonster.com/data/item/1544072768/m_JACKBYE_G11M_1_1.jpg',
    name: '잭바이',
    color_name: 'G1(1M)',
    price: '249000',
    count: 1,
    product_id: 1
  },
  {
    image:
      'https://www.gentlemonster.com/data/item/1540371434/m_JACKBYE_01_1.jpg',
    name: '잭바이',
    color_name: '01',
    price: '249000',
    count: 1,
    product_id: 1
  }
];
class CartConatiner extends Component {
  render() {
    return (
      <div>
        <div>카트</div>
        <table className="cart_product_table">
          {carts.map((cart, idx) => (
            <tr key={idx}>
              <td>
                <Link
                  to={
                    `/shop_detail?product_id=` +
                    cart.product_id +
                    `?color_name=` +
                    cart.color_name
                  }
                >
                  <img
                    key={idx}
                    alt="product_image"
                    width="80px"
                    src={cart.image}
                  />
                </Link>
              </td>
              <td>
                <div>{cart.name + ' ' + cart.color_name}</div>
              </td>
              <td>수량 : {cart.count}</td>
              <td>합계 : {cart.price} 원</td>
            </tr>
          ))}
        </table>
        
      </div>
    );
  }
}

export default CartConatiner;
