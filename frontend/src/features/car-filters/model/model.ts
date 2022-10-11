import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { carModel } from 'entities/car';
import { Car } from 'shared/api/types';
import { createBaseSelector } from 'shared/lib/redux-std';

const REDUCER_PATH = 'features/car-filters';

type Filters = {
  column: keyof Car;
  action: string;
  value: string;
};

const initialState: Filters = {
  column: 'name',
  action: 'contains',
  value: '',
};

const slice = createSlice({
  name: REDUCER_PATH,
  initialState,
  reducers: {
    setFilterColumn(state, action: PayloadAction<any>) {
      state.column = action.payload.trim();
    },
    setFilterAction(state, action: PayloadAction<any>) {
      state.action = action.payload.trim();
    },
    setFilterValue(state, action: PayloadAction<any>) {
      state.value = action.payload.trim();
    },
  },
});

const baseSelector = createBaseSelector<typeof initialState>(REDUCER_PATH);

const filteredCarList = createSelector(
  carModel.selectors.carList,
  baseSelector,
  (carList, filters) => {
    return carList.filter((car) => {
      switch (filters.action) {
        case 'equals':
          return (
            car[filters.column].toString().toLowerCase() ===
            filters.value.toLowerCase()
          );
        case 'contains':
          return car[filters.column]
            .toString()
            .toLowerCase()
            .includes(filters.value.toLowerCase());
        case 'more':
          return car[filters.column] > Number(filters.value);
        case 'less':
          return car[filters.column] < Number(filters.value);
        default:
          return true;
      }
    });
  }
);

export const actions = {
  ...slice.actions,
};

export const selectors = {
  filteredCarList,
};

export const reducers = {
  [REDUCER_PATH]: slice.reducer,
};
