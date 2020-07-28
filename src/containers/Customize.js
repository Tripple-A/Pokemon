import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { EDIT, VIEW } from '../actions';

const mapStateToProps = state => ({
  pokemons: state.pokemons.list,
  index: state.currentIndex,
});

const mapDispatchToProps = dispatch => ({
  edit: (index, extra) => dispatch(EDIT(index, extra)),
  remove: index => dispatch(VIEW(index)),
});

const Customize = ({
  pokemons, index, edit, remove,
}) => {
  const currentPokemon = index > 0 ? pokemons[index - 1] : null;
  const save = extra => {
    edit(index - 1, extra);
  };

  if (index > 0) {
    return (
      <div className="justify-content-center">
        <h6 className="text-center pokeHeading">
          Form for
          <span>
            {' '}
            { currentPokemon.forms[0].name }
          </span>
        </h6>
        <Form current={currentPokemon} save={save} remove={remove} />
      </div>
    );
  }

  return (
    <div>

      <h6 className="text-center pokeHeading">Customize your Pokemons</h6>

      <p className="text-center info ">Click on a pokemon&apos;s name to view and customize it&apos;s properties</p>
    </div>
  );
};

Customize.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  edit: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Customize);
