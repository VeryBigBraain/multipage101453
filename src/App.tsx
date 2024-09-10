import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import { HomePage } from './pages/HomePage';
import { BlocksPage } from './pages/BlocksPage';
import { NewsPage } from './pages/NewsPage';

export default function App() {
  return (
    const router = createBrowserRouter([{
      path: "/",
      element: <HomePage />
  },{
      path: "/blocks",
      element: <blocksPage />
  },{
      path: "/news",
      element: <newsPage />
  },]);

    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}