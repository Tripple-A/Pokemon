import React from 'react';

const SearchBar = () => (
  <div classNameName="searchDiv row justify-content-center">
    <form>
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-btn">
          <button className="btn btn-default" type="submit">
            <i className="glyphicon glyphicon-search" />
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default SearchBar;
