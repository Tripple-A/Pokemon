import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import '../styles/home.css';
import 'animate.css/animate.css';

const App = () => (
  <div className="App">
    <Header />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
