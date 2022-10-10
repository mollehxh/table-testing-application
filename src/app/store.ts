import { configureStore } from '@reduxjs/toolkit';
import { carModel } from 'entities/car';

export const store = configureStore({
  reducer: {
    ...carModel.reducers,
  },
});
