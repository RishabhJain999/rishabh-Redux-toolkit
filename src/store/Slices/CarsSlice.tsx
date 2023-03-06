import { createSlice, nanoid } from '@reduxjs/toolkit';

interface carListProps {
  searchTerm: string;
  carsList: {
    name: string;
    cost: number;
    id: string;
  }[];
}

const initialState: carListProps = {
  carsList: [],
  searchTerm: '',
};
export const CarsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addCars: (state, action) => {
      state.carsList.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar: (state, action) => {
      const updated = state.carsList.filter((car) => {
        return car.id !== action.payload;
      });
      state.carsList = updated;
    },
  },
});
export const { changeSearchTerm, addCars, removeCar } = CarsSlice.actions;
export const CarsReducer = CarsSlice.reducer;
