import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

const Display = ({ pokemons }) => {
    const listItems = pokemons.map((pokemon, index) =>
    <div key={index}>
    <img src={pokemon.sprites.front_default}  />
    <p>{pokemon.forms[0].name}</p>
    </div>
  );

  if(pokemons.length > 0)
  return (
    <div>
      <h6 className="text-center">Pokemons</h6>
      <div className="pokePics">
          { listItems }
      </div>
    </div>
  ); else
  return(
      <div>
          <h6 className="text-center">You have not chosen any pokemons</h6>
      </div>
  )
  
};

export default connect(mapStateToProps)(Display);
