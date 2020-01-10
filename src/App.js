import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/Products/ProductList";
import { products } from "./data";


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products: products
    }
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" render={props => (<ProductList{...props} products={this.state.products}/>)} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
 
