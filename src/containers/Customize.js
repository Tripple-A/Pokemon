import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { editPokemon } from '../reducers/pokemons';
import { viewPokemon } from '../reducers/currentIndex';

const mapStateToProps = state => ({
  pokemons: state.pokemons.list,
  index: state.currentIndex,
});

const mapDispatchToProps = { editPokemon, viewPokemon };

const Customize = ({
  pokemons, index, editPokemon, viewPokemon,
}) => {
  const currentPokemon = index > 0 ? pokemons[index - 1] : null;
  const save = extra => {
    editPokemon({
      index: index - 1,
      extra,
    });
  };

  if (index > 0) {
    return (
      <div className="justify-content-center">
        <h6 className="text-center pokeHeading">
          Form for

          {' '}
          { currentPokemon.forms[0].name }

        </h6>
        <Form current={currentPokemon} save={save} remove={viewPokemon} />
      </div>
    );
  }

  return (
    <div className="customize">

      <h6 className="text-center pokeHeading">Customize your Pokemons</h6>

      <p className="text-center info ">Click on a pokemon&apos;s name to view and customize it&apos;s properties</p>
    </div>
  );
};

Customize.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  editPokemon: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  viewPokemon: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Customize);
