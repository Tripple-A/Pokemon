import React from 'react';
import { connect } from 'react-redux';
import { VIEW } from '../actions';

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = dispatch => ({
  view: index => dispatch(VIEW(index)),
});

const Display = ({ pokemons, view }) => {
  const listItems = pokemons.map((pokemon, index) => (
    <div key={index} onClick={() => view(index + 1)}>
      <img src={pokemon.sprites.front_default} />
      <p>{pokemon.forms[0].name}</p>
    </div>
  ));

  if (pokemons.length > 0) {
    return (
      <div>
        <h6 className="text-center pokeHeading">Pokemons</h6>
        <div className="pokePics">
          { listItems }
        </div>
      </div>
    );
  } return (
    <div>
      <h6 className="text-center">You have not chosen any pokemons</h6>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
