import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { carModel } from 'entities/car';
import { createBaseSelector } from 'shared/lib/redux-std';

const REDUCER_PATH = 'features/car-filters';

const slice = createSlice({
  name: REDUCER_PATH,
  initialState: {} as any,
  reducers: {
    setFilters(_, action: PayloadAction<any>) {
      return action.payload;
    },
  },
});

const baseSelector = createBaseSelector<any>(REDUCER_PATH);

const filteredCarsList = createSelector(
  carModel.selectors.carList,
  baseSelector,
  (carList, filters) => {
    return carList.filter((item: any) => {
      return filters.completed === item.completed;
    });
  }
);

export const actions = {
  ...slice.actions,
};

export const selectors = {
  filteredCarsList,
};

export const reducers = {
  [REDUCER_PATH]: slice.reducer,
};
