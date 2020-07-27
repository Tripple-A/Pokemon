const currentIndex = (state = 0, action) => {
  switch (action.type) {
    case 'VIEW':
      return action.index;
    default:
      return state;
  }
};

export default currentIndex;
