import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import { HomePage } from './pages/HomePage';
import { NewsPage } from './pages/NewsPage';
import { BlockPage } from './pages/BlockPage';

export default function App() {
  const router = createBrowserRouter([{
      path: "/",
      element: <HomePage />
  },{
      path: "/news",
      element: <newsPage />
  },{
      path: "/block",
      element: <blockPage />
  },]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}