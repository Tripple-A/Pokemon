import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ADD } from '../actions';

const mapDispatchToProps = dispatch => ({
  add: pokemon => dispatch(ADD(pokemon)),
});

const mapStateToProps = state => ({
  pokemons: state.pokemons.list,
  savedNames: state.pokemons.savedNames,
});

const Details = ({
  details, add, pokemons, loading, savedNames,
}) => {
  const [error, setError] = useState('');
  useEffect(() => {
    if (loading) setError('');
  }, [loading]);

  const checkAdd = details => {
    if (savedNames.includes(details.id)) {
      setError(`${details.forms[0].name} already exists in catalogue`);
      return null;
    }
    if (pokemons.length < 6) {
      setError('');
      add(details);
    } else {
      setError('You can only pick six pokemans');
    }
    return null;
  };

  if (loading) {
    return (
      <div className="spinner-border text-primary mt-2" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (details === 500 || details.count > 0) {
    return (
      <h6 className="info error">
        There was an error with your search,
        Please try searching with a valid name or number
      </h6>
    );
  }
  if (Object.keys(details).length > 0) {
    return (
      <div className="detailsDiv text-left row justify-content-center">
        <h6 className="error">{error}</h6>
        <div className="col-md-8">
          <div className="myDetails">
            <h6>
              Name:
              <span>
                {details.forms[0].name}
              </span>

            </h6>
          </div>
          <div className="myDetails">
            <h6>
              Weight:
              <span>
                {details.weight}
              </span>
            </h6>
          </div>
          <div className="myDetails">
            <h6>
              Height:
              <span>
                {details.height}
              </span>
            </h6>
          </div>

        </div>
        <div className="col-md-4">
          <img
            alt="pokemon pic"
            src={details.sprites.front_default}
            className="pokeImg"
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => checkAdd(details)}
        >
          Add Pokemon
        </button>
      </div>
    );
  }
  return (
    <div>
      <h6 className="info">
        I am here to display the pokemons you search for. Please keep me busy.
      </h6>
    </div>
  );
};

Details.propTypes = {
  add: PropTypes.func.isRequired,
  savedNames: PropTypes.arrayOf(Object).isRequired,
  pokemons: PropTypes.arrayOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  details: PropTypes.shape({
    forms: PropTypes.arrayOf(Object),
    count: PropTypes.number,
    weight: PropTypes.number,
    height: PropTypes.number,
    id: PropTypes.number,
    sprites: PropTypes.shape({
      front_default: PropTypes.string.isRequired,
    }),
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
