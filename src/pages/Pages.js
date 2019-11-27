import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ShopContainer from "./shop/ShopContainer";
import StoreContainer from "./store/StoreContainer";
import StoreDetail from "./store/StoreDetail";
import ShopDetailContainer from "./shop/ShopDetailContainer";
import CartConatiner from "./cart/CartConatiner";
import StoriesContainer from "./stories/StoriesContainer";
//import GlassesContainer from './glasses/GlassesContainer';

class Pages extends Component {
  render() {
    return (
      <div style={{ paddingTop: "80px" }}>
        <Route path="/shop" exactcomponent={ShopContainer} />
        <Route path="/shop_detail" exact component={ShopDetailContainer} />
        <Switch>
          <Route path="/store/:store_id" exact component={StoreDetail} />
          <Route path="/store" exact component={StoreContainer} />
        </Switch>
        <Route path="/cart" exact component={CartConatiner} />
        <Route path="/stories" exact component={StoriesContainer} />
      </div>
    );
  }
}

export default Pages;
