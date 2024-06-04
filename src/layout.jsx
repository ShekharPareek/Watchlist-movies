import React from 'react'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar'
import Home from './components/home'

function Layout() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Outlet />
    </>
  )
}

export default Layout