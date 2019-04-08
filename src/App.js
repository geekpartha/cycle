import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductList />
      </React.Fragment>
    );
  }
}

export default App;
