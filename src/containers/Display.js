import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

const Display = ({ pokemons }) => {
  console.log('pokemons',pokemons);
  if(pokemons.length > 0)
  return (
    <div>
      Pokemons
    </div>
  ); else
  return(
      <div>
          <h6>You have not chosen any pokemons</h6>
      </div>
  )
  
};

export default connect(mapStateToProps)(Display);
