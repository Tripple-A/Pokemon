import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons';
import currentIndex from './currentIndex';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  currentIndex,
});

export default rootReducer;
