import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

const Display = ({ pokemons }) => {
    const listItems = pokemons.map((pokemon,index) =>
    <img src={pokemon.sprites.front_default} key={index} />
  );

  if(pokemons.length > 0)
  return (
    <div>
      Pokemons
      <div>
          { listItems }
      </div>
    </div>
  ); else
  return(
      <div>
          <h6>You have not chosen any pokemons</h6>
      </div>
  )
  
};

export default connect(mapStateToProps)(Display);
