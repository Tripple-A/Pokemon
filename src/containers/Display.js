import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { VIEW, DELETE } from '../actions';
import Logo from '../images/pokemon.png';

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

  const listItems = pokemons.map((pokemon, index) => (
    <div key={pokemon.forms[0].name} className="pokeImages justify-content-center">
      <button
        className="pokeName text-justify"
        onClick={() => view(index + 1)}
        type="button"
        data-testid="viewButton"
      >
        {pokemon.nickName || pokemon.forms[0].name }
      </button>
      <button type="button" className="trash" data-testid="deleteButton" onClick={() => discard(index)}>
        <i
          className="fa fa-trash-o"
          aria-hidden="true"
        />
      </button>
      <img
        alt="pokemon pic"
        src={pokemon.sprites.front_default}
        className="justify-content-center pokPic"
      />
      <p className="id">
        #
        {pokemon.id}
      </p>
    </div>
  ));

  if (pokemons.length > 0) {
    return (
      <div>
        <img src={Logo} alt="pokemon logo" id="logo" />
        <div className="pokePics">
          { listItems }
        </div>
      </div>
    );
  } return (
    <div className="animate__animated animate__bounce">
      <h6 className="text-center info">You have not chosen any pokemons</h6>
    </div>
  );
};

Display.propTypes = {
  pokemons: PropTypes.arrayOf(Object).isRequired,
  view: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
