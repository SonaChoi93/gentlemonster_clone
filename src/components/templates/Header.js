import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { clickCategory, clickCart } from '../../store/modules/category';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {
  render() {
    const { clickCategory, carts, show_cart, clickCart } = this.props;
    return (
      <nav className="nav_section">
        <NavLink exact to="/" className="logo">
          GENTLEMONSTER
        </NavLink>
        <ul className="nav_item">
          <li>
            <NavLink to="/product/0">
              <span>선글라스</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/product/1">
              <span>안경</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/store">
              <span>매장</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/stories">
              <span>스토리</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/service">
              <span>서비스</span>
            </NavLink>
          </li>
        </ul>
        <div className="logo">
          <ul className="sub_nav_item">
            <li>
              <div
                style={{ textDecoration: 'none' }}
                to="/cart"
                onClick={clickCategory}
              >
                <div
                  className="cart_circle"
                  onClick={e => {
                    e.stopPropagation();
                    clickCart();
                  }}
                >
                  <span className="cart_circle_num">{carts.length}</span>
                </div>
              </div>
            </li>
          </ul>
          <div className={`cart_section_popup_inner ${show_cart && 'on'}`}>
            <p className="cart_group_title font_title">카트</p>
            <div>
              {carts.length === 0 ? (
                '카트에 담긴 제품이 없습니다'
              ) : (
                <table>
                  <tbody>
                    {carts.map(cart => (
                      <tr key={cart.number}>
                        <td style={{ height: '80px' }}>
                          <img
                            alt={cart.color.name}
                            src={cart.color.image[0]}
                            style={{ height: '60px' }}
                          />
                        </td>
                        <td>
                          <div>
                            {cart.name} {cart.color.name}
                          </div>
                          <div>Qty : {cart.count}</div>
                        </td>
                        <td>{cart.price * cart.count} 원</td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="3">소계</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
            <Link
              to="/cart"
              className="btn_style_white"
              style={{ textDecoration: 'none' }}
            >
              카트 자세히 보기
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  carts: state.cart.carts,
  show_cart: state.category.cart
});

const mapDispatchToProps = dispatch => ({
  clickCategory: id => dispatch(clickCategory(id)),
  clickCart: () => dispatch(clickCart())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
