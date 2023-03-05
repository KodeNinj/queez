import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import GamepageLight from './PAGES/GAMEPAGE/GamepageLight';
import MainGamePage from './PAGES/GAMEPAGE/MainGamePage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App  />,
  },
  {
    path: "/playCountry",
    element: <MainGamePage/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

