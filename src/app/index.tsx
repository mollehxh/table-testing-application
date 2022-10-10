import { withProviders } from './providers';
import { Routing } from 'pages';
import './index.css';

/**
 * Application entry point
 * @remark Contains application initialization logic in a HOC wrapper
 * @see withProviders
 */
export const App = withProviders(() => {
  return <Routing />;
});
