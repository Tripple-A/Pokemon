import React, { useState } from 'react';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const search = () => {
  };
  const update = e => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="searchDiv row justify-content-center">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for pokemon by name"
          onChange={update}
          value={searchValue}
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" type="button" onClick={search}>
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
