import { RouteObject } from 'react-router-dom';
import { HomePage } from './home';

export const routesMap: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];
