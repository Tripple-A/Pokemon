import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { VIEW, DELETE } from '../actions';

const mapStateToProps = state => ({
  newList: state.pokemons,
  pokemons: state.pokemons.list,
});

const mapDispatchToProps = dispatch => ({
  view: index => dispatch(VIEW(index)),
  remove: index => dispatch(DELETE(index)),
});

const Display = ({ pokemons, view, remove }) => {
  const discard = index => {
    view(0);
    remove(index);
  };

  const handle = async index => {
    await view(0);
    view(index + 1);
  };

  const listItems = pokemons.map((pokemon, index) => (
    <div key={pokemon.forms[0].name} className="pokeImages justify-content-center">
      <img
        alt="pokemon pic"
        src={pokemon.sprites.front_default}
        className="justify-content-center"
      />
      <i
        className="fa fa-trash-o"
        aria-hidden="true"
        onClick={() => discard(index)}
      />
      <p
        className="pokeName text-left"
        onClick={() => handle(index)}
      >
        {pokemon.nickName || pokemon.forms[0].name }
      </p>
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

Display.propTypes = {
  pokemons: PropTypes.arrayOf(Object).isRequired,
  view: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
