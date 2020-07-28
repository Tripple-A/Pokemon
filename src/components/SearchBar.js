import React, { useState } from 'react';
import Details from '../containers/Details';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const search = () => {
    setLoading(true);
    const search = searchValue.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(data => data.json())
      .then(res => {
        setLoading(false);
        setDetails(res);
      })
      .catch(() => {
        setLoading(false);
        setDetails({ error: 500 });
      });
  };
  const update = e => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="searchDiv row justify-content-center">
      <div className="form-group">
        <label htmlFor="search">Pokemon Online Search </label>
        <div className="input-group form-group">
          <input
            id="search"
            type="text"
            className="form-control search"
            placeholder="Search by name or id"
            onChange={update}
            value={searchValue}
            data-testid="typeHere"
          />
          <button
            className="searchBtn"
            type="submit"
            onClick={search}
            data-testid="clickHere"
          >
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
      <Details details={details} loading={loading} />
    </div>
  );
};

export default SearchBar;
