const pokemons = (state = [], action) => {
  let newArr;
  switch (action.type) {
    case 'ADD':
      newArr = [...state, action.pokemon];
      return newArr;
    default:
      return state;
  }
};

export default pokemons;
