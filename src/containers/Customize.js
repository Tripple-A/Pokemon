import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  index: state.currentIndex,
});

const Customize = ({ pokemons, index }) => {
  const currentPokemon = index > 0 ? pokemons[index - 1] : null;
  if (index > 0) {
    return (
      <div className="">
        <h6 className="text-center pokeHeading">
          Form for
          {currentPokemon.forms[0].name}
        </h6>
      </div>
    );
  }

  return (
    <div>

      <h6 className="text-center pokeHeading">Forms</h6>

      <p className="text-center">Select a pokemon to view and customize it's properties</p>
    </div>
  );
};

export default connect(mapStateToProps)(Customize);
