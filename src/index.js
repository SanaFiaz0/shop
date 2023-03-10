import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop.js';
import ProductDetail from './Components/ProductDetail';
import Gallery from './Components/Gallery';
import Cart from './Components/Cart';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Shop" component={Shop} />
      <Route exact path="/ProductDetail" component={ProductDetail} />
      <Route exact path="/Gallery" component={Gallery} />
      <Route exact path="/Cart" component={Cart} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);