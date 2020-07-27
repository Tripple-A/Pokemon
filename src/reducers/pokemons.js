const pokemons = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.pokemon];
    default:
      return state;
  }
};

export default pokemons;
