import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopContainer from './shop/ShopContainer';
import StoreContainer from './store/StoreContainer';
import StoreDetail from './store/StoreDetail';

class Pages extends Component {
  render() {
    return (
      <div style={{ paddingTop: '80px' }}>
        <Route path="/shop" exact component={ShopContainer} />
        <Switch>
          <Route path="/store/:store_id" exact component={StoreDetail} />
          <Route path="/store" exact component={StoreContainer} />
        </Switch>
      </div>
    );
  }
}

export default Pages;
