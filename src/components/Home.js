import React from 'react';
import SearchBar from '../containers/SearchBar';

const Home = () => (
  <div className="container">
    <div className="row board">
      <div className="col-md-7">
        pictures and Form
      </div>
      <div className="col-md-5">
        <SearchBar />
      </div>
    </div>
  </div>
);

export default Home;
