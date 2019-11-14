import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Img = styled.img`
  width: 200px;
  border-radius: 5px;
`;
class StoreList extends Component {
  render() {
    const { url } = this.props;
    return (
      <div>
        {this.props.stores.map(store => (
          <div className="store_box" key={store.id}>
            <Link to={`${url}/${store.id}`} style={{ textDecoration: 'none' }}>
              <Img alt={store.name} src={store.thumbnail_url} />
            </Link>
            <div className="store_name">{store.name}</div>
            <div className="store_info address">{store.address}</div>
            <div className="store_info number">{store.number}</div>
            <div className="store_show">
              <Link
                to={`${url}/${store.id}`}
                style={{ textDecoration: 'none' }}
              >
                <span>매장보기</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default StoreList;
