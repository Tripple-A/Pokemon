const obj = {
  pokemons: [],
  savedNames: [],
};

const pokemons = (state = [], action) => {
  let newArr;
  let newObj;
  switch (action.type) {
    case 'ADD':
      return [...state, action.pokemon];
    case 'EDIT':
      newArr = [...state];
      newObj = { ...newArr[action.index], ...action.extra };
      newArr[action.index] = newObj;
      return newArr;
    case 'DELETE':
      return state.filter((item, index) => index !== action.index);
    default:
      return state;
  }
};

export default pokemons;
