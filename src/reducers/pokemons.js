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
      state.list = slice(state.list, action.payload);
      state.savedNames = slice(state.savedNames, action.payload);
    },
  },
});

export const { addPokemon, editPokemon, deletePokemon } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
