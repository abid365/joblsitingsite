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
import Jobdetails from './Components/Jobdetails';
import Error from './Components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=> fetch('/fakejobs.json'),
        errorElement: <Error />,

      },
      {
        path: 'statistics',
        element: <Stats />,
        errorElement: <Error />,
      },
      {
        path: 'appliedjobs',
        element: <Appliedjobs />,
        errorElement: <Error />,
      },
      {
        path: 'blogs',
        element: <Blog />,
        errorElement: <Error />,
      },
      {
        path: 'details/:id',
        element: <Jobdetails />,
        loader: async({params})=>{
          const res = await fetch('/fakejobs.json')
          const data = await res.json();
          
          const jobDetails = data.find(job=> job.id==params.id);
          return jobDetails;
        },
        errorElement: <Error />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
