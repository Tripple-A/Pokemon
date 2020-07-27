const ADD = pokemon => ({
  type: 'ADD',
  pokemon,
});

const VIEW = index => ({
  type: 'VIEW',
  index,
});

const DELETE = index => ({
  type: 'DELETE',
  index,
});

const EDIT = (index, extra) => ({
  type: 'EDIT',
  index,
  extra,
});

export {
  ADD, VIEW, EDIT, DELETE,
};
