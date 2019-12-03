import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ShopContainer from './pages/shop/ShopContainer';
import StoreContainer from './pages/store/StoreContainer';
import StoreDetail from './pages/store/StoreDetail';
import ShopDetailContainer from './pages/shop/ShopDetailContainer';
import CartConatiner from './pages/cart/CartConatiner';

import CategoriesContainer from './containers/CategoriesContainer';

import Header from './components/templates/Header';
import Footer from './components/templates/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CategoriesContainer /> */}
        <Header />
        <Route path="/product/:product_id" exact component={ShopContainer} />
        <Route path="/product_detail" exact component={ShopDetailContainer} />
        <Switch>
          <Route path="/store/:store_id" exact component={StoreDetail} />
          <Route path="/store" exact component={StoreContainer} />
        </Switch>
        <Route path="/cart" exact component={CartConatiner} />
        <Footer />
      </div>
    );
  }
}

export default App;
