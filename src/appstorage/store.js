import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slice/Slices';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});