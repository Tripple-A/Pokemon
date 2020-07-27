const obj = {
  list: [],
  savedNames: [],
};

const slice = (arr, index) => arr.filter((item, ind) => ind !== index);

const pokemons = (state = obj, action) => {
  const newArr = { ...state };
  let newObj;
  switch (action.type) {
    case 'ADD':
      newArr.savedNames.push(action.pokemon.forms[0].name);
      newArr.list = [...state.list, action.pokemon];
      return newArr;
    case 'EDIT':
      newObj = { ...newArr.list[action.index], ...action.extra };
      newArr.list[action.index] = newObj;
      return newArr;
    case 'DELETE':
      newArr.list = slice(newArr.list, action.index);
      newArr.savedNames = slice(newArr.savedNames, action.index);
      return newArr;
    default:
      return state;
  }
};

export default pokemons;
