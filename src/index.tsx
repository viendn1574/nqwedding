
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import PhotoPage from './pages/PhotoPage';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();
//@ts-ignore
window.__forceSmoothScrollPolyfill__ = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    ),
  },
  {
    path: "/photos/:type",
    element: (
      <PhotoPage />
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <RouterProvider router={router} />
);

