import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { EDIT, VIEW } from '../actions';

const mapStateToProps = state => ({
  pokemons: state.pokemons,
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

      <h6 className="text-center pokeHeading">Forms</h6>

      <p className="text-center">Select a pokemon to view and customize it's properties</p>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Customize);
