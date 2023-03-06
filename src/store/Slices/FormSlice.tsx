import { createSlice } from '@reduxjs/toolkit';
import { addCars } from '../index';
export const FormSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeCost: (state, action) => {
      state.cost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCars, (state) => {
      state.name = '';
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = FormSlice.actions;
export const FormReducer = FormSlice.reducer;
