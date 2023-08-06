import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const routes = [
  {
    path: "/:name?",
    element: <App />,
  },
];

const router = createBrowserRouter(routes);

export default router;
