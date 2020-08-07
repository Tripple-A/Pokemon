import { createSlice } from '@reduxjs/toolkit';

const currentIndexSlice = createSlice({
  name: 'currentIndex',
  initialState: 0,
  reducers: {
    viewPokemon(state, action) {
      return action.payload;
    },
  },
});

export const { viewPokemon } = currentIndexSlice.actions;
export default currentIndexSlice.reducer;
