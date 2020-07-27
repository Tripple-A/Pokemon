import React from 'react';
import SearchBar from './SearchBar';
import Display from '../containers/Display';
import Customize from '../containers/Customize';

const Home = () => (
  <div className="container">
    <div className="row board">
      <div className="col-md-7">
        <div className="display">
          <Display />
          <Customize />
        </div>
      </div>
      <div className="col-md-5 searchContainer">
        <SearchBar />
      </div>
    </div>
  </div>
);

export default Home;
