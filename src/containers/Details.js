import React, {useState} from 'react';
import { connect } from 'react-redux';
import { ADD } from '../actions';

const mapDispatchToProps = dispatch => ({
  add: pokemon => dispatch(ADD(pokemon)),
});

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

const Details = ({ details, add, pokemons, loaded }) => {
  const [error, setError] = useState('');
  const checkAdd = details => {
    if(pokemons.includes(details)) {
    setError('Pokemon already exists in catalogue');
    return null;
    }
    if (pokemons.length < 6){
    add(details)
    }else{
    setError('You can only pick six pokemans')
    }
  }

  if ( details === 500 || details.count > 0 ) {
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
        <h6 className="error">{loaded ? '' : error}</h6>
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
          onClick={() => checkAdd(details)}
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

export default connect(mapStateToProps, mapDispatchToProps)(Details);
