// import React from 'react'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import RegisterForm from './components/Register'
// import MyList from './components/mylist'
// import Layout from './layout'
// import MainSection from './components/mainsection'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='/' element={<MainSection/>}/>
//       <Route path='mylist' element={<MyList />} />
//     </Route>
//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RegisterForm />
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )


import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RegisterForm from './components/Register';
import MyList from './components/mylist';
import Layout from './layout';
import MainSection from './components/mainsection';
import ReactDOM from 'react-dom/client';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
  
        <Route path='/' element={<Layout />}>
      <Route index element={<MainSection />} />
      <Route path='mylist' element={<MyList />} />
      <Route path='' element={<RegisterForm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
