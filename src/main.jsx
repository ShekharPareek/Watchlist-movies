import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import RegisterEmail from './components/Register';
import Home from './components/home';
import Layout from './layout';
import MyList from './components/mylist';
import MainSection from './components/mainsection';
import './index.css';

const getEmail = localStorage.getItem('User');

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* If user is authenticated, show Home component, otherwise show RegisterEmail component */}
      <Route index element={getEmail ? <Navigate to="/home" /> : <RegisterEmail />} />
      <Route path="home" element={getEmail ? <Home /> : <Navigate to="/" />} />
      <Route path="mylist" element={getEmail ? <MyList /> : <Navigate to="/" />} />
      <Route path="*" element={<MainSection />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
