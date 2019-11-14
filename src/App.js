import React, { Component } from 'react';
import './App.css';
import CategoriesContainer from './containers/CategoriesContainer';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <CategoriesContainer />
          <Pages />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
