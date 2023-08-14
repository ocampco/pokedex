import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const routes = [
  {
    path: "/:name?",
    element: <App />,
  },
];

const options = {
  basename: '/pokedex',
};

const router = createBrowserRouter(routes, options);

export default router;
