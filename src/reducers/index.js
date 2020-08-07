import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons';
import currentIndexReducer from './currentIndex';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  currentIndex: currentIndexReducer,
});

export default rootReducer;
