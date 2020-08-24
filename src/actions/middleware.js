import { addPokemon } from '../reducers/pokemons';

function fetchSecretSauce() {
  return fetch('https://pokeapi.co/api/v2/pokemon/45')
    .then(data => data.json())
    .then(res => res);
}

const auto = () => dispatch => {
  fetchSecretSauce()
    .then(data => dispatch(addPokemon(data)))
    .catch(err => err);
};

export default auto;
