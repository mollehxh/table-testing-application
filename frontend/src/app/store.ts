import { configureStore } from '@reduxjs/toolkit';
import { carModel } from 'entities/car';
import { carFiltersModel } from 'features/car-filters';

export const store = configureStore({
  reducer: {
    ...carModel.reducers,
    ...carFiltersModel.reducers,
  },
});
