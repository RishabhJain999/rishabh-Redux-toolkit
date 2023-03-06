import { configureStore } from '@reduxjs/toolkit';
import { changeName, changeCost, FormReducer } from './Slices/FormSlice';
import {
  changeSearchTerm,
  addCars,
  CarsReducer,
  removeCar,
} from './Slices/CarsSlice';
const store = configureStore({
  reducer: {
    form: FormReducer,
    cars: CarsReducer,
  },
});
export { store, changeName, changeCost, changeSearchTerm, addCars, removeCar };
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
