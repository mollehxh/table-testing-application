import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import moment from 'moment';
import { internalApi } from 'shared/api';
import { Car } from 'shared/api/types';
import { createBaseSelector } from 'shared/lib/redux-std';

const REDUCER_PATH = 'entites/car';

const entityAdapter = createEntityAdapter<Car>();

const adapterSelectors = entityAdapter.getSelectors();
const initialState = entityAdapter.getInitialState({
  isLoading: false,
});

const slice = createSlice({
  name: REDUCER_PATH,
  initialState,
  reducers: {
    setCarListLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCarList.fulfilled, entityAdapter.upsertMany);
  },
});

// Actions
const fetchCarList = createAsyncThunk(
  REDUCER_PATH + '/fetch-car-list',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(slice.actions.setCarListLoading(true));
      const result = await internalApi.getCarsList();

      const data = result.data.map((car) => ({
        ...car,
        date: moment(car.date).format('YYYY/MM/DD'),
      }));

      return data;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(slice.actions.setCarListLoading(false));
    }
  }
);

// Selectors
const baseSelector = createBaseSelector<typeof initialState>(REDUCER_PATH);

const isLoading = createSelector(baseSelector, (state) => state.isLoading);

const carList = createSelector(baseSelector, adapterSelectors.selectAll);

// public API
export const actions = {
  fetchCarList,
};

export const selectors = {
  isLoading,
  carList,
};

export const reducers = { [REDUCER_PATH]: slice.reducer };
