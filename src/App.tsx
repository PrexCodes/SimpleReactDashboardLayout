import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { mainRoute } from './Routers/mainRoute';

function App() {
  return (
    <div>
        <RouterProvider router={mainRoute}/>
    </div>
  );
}

export default App;
