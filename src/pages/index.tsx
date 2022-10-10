import { useRoutes } from 'react-router-dom';
import { routesMap } from './routes';

export const Routing = () => {
  const routes = useRoutes(routesMap);

  return routes;
};
