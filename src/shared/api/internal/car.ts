import { AxiosPromise } from 'axios';
import { apiInstance } from 'shared/api/base';
import { Car } from 'shared/api/types';

export const getCarsList = (): AxiosPromise<Car[]> => {
  return apiInstance.get('/cars');
};
