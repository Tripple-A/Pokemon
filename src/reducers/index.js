const rootReducer = (state = [], action) => {
  console.log('here')
  switch (action.type) {
    case 'ADD':
      state.push(action.pokemon);
      console.log('state',state)
      return state;
    case 'RESET':
      return action.word;
    default:
      return state;
  }
};

export default rootReducer;
