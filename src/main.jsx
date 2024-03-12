import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './components/Home.jsx';
import CountryDetails from './components/CountryDetails.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([

  {
    path: "/api-project",
    element: <Home/>,
  },
  {
    path: "/Home/:theme/:currentFilter",
    element: <Home/>,
  },
  {
    path: "/Home/CountryDetails/:theme/:id/:filter",
    element: <CountryDetails/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)