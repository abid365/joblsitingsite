import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Home from './Components/Home';
import Stats from './Components/Stats';
import Appliedjobs from './Components/Appliedjobs';
import Blog from './Components/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=> fetch('fakejobs.json'),

      },
      {
        path: 'statistics',
        element: <Stats />
      },
      {
        path: 'appliedjobs',
        element: <Appliedjobs />
      },
      {
        path: 'blogs',
        element: <Blog />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)