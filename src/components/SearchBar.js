import React, { useState } from 'react';
import Details from '../containers/Details';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [details, setDetails] = useState([]);
  const search = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
      .then(data => data.json())
      .then(res => setDetails(res))
      .catch(() => setDetails(500));
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
          placeholder="Search by name or number"
          onChange={update}
          value={searchValue}
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" type="button" onClick={search}>
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
      <Details details={details} />
    </div>
  );
};

export default SearchBar;
