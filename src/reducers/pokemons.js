/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const obj = {
  list: [],
  savedNames: [],
};

const slice = (arr, index) => arr.filter((item, ind) => ind !== index);

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: obj,
  reducers: {
    addPokemon(state, action) {
      state.savedNames.push(action.payload.id);
      state.list.push(action.payload);
    },
    editPokemon(state, action) {
      const newObj = { ...state.list[action.payload.index], ...action.payload.extra };
      state.list[action.payload.index] = newObj;
    },
    deletePokemon(state, action) {
      const list = slice(state.list, action.index);
      console.log(list);
      state.savedNames = slice(state.savedNames, action.index);
    },
  },
});

const pokemons = (state = obj, action) => {
  const newArr = { ...state };
  let newObj;
  switch (action.type) {
    case 'ADD':
      newArr.savedNames.push(action.pokemon.id);
      newArr.list = [...state.list, action.pokemon];
      return newArr;
    case 'EDIT':
      newObj = { ...newArr.list[action.index], ...action.extra };
      newArr.list[action.index] = newObj;
      return newArr;
    case 'DELETE':
      newArr.list = slice(newArr.list, action.payload);
      newArr.savedNames = slice(newArr.savedNames, action.payload);
      return newArr;
    default:
      return state;
  }
};

export const { addPokemon, editPokemon, deletePokemon } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;

//export default pokemons;
