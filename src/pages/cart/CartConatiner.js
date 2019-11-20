import React, { Component } from 'react';
import './cart.css';
import { connect } from 'react-redux';
import { deleteCard, deleteAll } from '../../store/modules/cart';
import CartComponent from './CartComponent';
import { Link } from 'react-router-dom';
class CartConatiner extends Component {
  render() {
    const { carts, deleteCard, deleteAll } = this.props;
    return (
      <div
        style={{
          padding: '150px 50px 50px',
          fontSize: '12px',
          maxWidth: '700px',
          margin: 'auto'
        }}
      >
        <div
          style={{
            fontSize: '14px',
            textAlign: 'left',
            paddingBottom: '30px'
          }}
        >
          카트
        </div>
        {carts.length !== 0 ? (
          <CartComponent carts={carts} deleteCard={deleteCard} />
        ) : (
          <table className="cart_product_table">
            <tr>카드에 담긴 제품이 없습니다.</tr>
          </table>
        )}
        {carts.length !== 0 && (
          <div style={{ textAlign: 'left' }}>
            <Link className="btn_mini_delete large" to="shop?ca_id=0">
              쇼핑 계속하기
            </Link>
            <div className="btn_mini_delete large" onClick={deleteAll}>
              쇼핑백 비우기
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  carts: state.cart.carts
});
const mapDispatchToProps = dispatch => ({
  deleteCard: number => dispatch(deleteCard(number)),
  deleteAll: () => dispatch(deleteAll())
});
export default connect(mapStateToProps, mapDispatchToProps)(CartConatiner);
