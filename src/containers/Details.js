import React from 'react';
import { connect } from 'react-redux';
import { ADD } from '../actions';

const mapDispatchToProps = dispatch => ({
  add: pokemon => {
    console.log('start dispatch')
    dispatch(ADD(pokemon))
  },
});

const Details = ({ details, add }) => {
  if (details === 500) {
    return (
      <h6>
        There was an error with your search,
        Please try searching with a valid name or number
      </h6>
    );
  }
  if (Object.keys(details).length > 0) {
    return (
      <div className="detailsDiv text-left row justify-content-center">
        <div className="col-md-8">
          <h6>
            Name:
            {details.forms[0].name}
          </h6>
          <h6>
            Weight:
            {details.weight}
          </h6>
          <h6>
            Height:
            {details.height}
          </h6>
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
          onClick={() => add(details)}
        >
          Add Pokemon
        </button>
      </div>
    );
  }
  return (
    <div>
      <h6>
        I am here to display the pokemons you search for. Please keep me busy.
      </h6>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Details);
