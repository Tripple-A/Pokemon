const ADD = pokemon => ({
  type: 'ADD',
  pokemon,
});

const VIEW = index => ({
  type: 'VIEW',
  index,
});

export { ADD, VIEW };
