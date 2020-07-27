import { combineReducers } from 'redux';
import pokemons from './pokemons';
import currentIndex from './currentIndex';

const rootReducer = combineReducers({
  pokemons,
  currentIndex,
});

export default rootReducer;
