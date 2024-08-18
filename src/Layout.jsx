import React from 'react'
import Header from './components/header/header'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import {Outlet} from 'react-router-dom'


function Layout() {
  return (
    <>
    <Header/>
    <Outlet/> // its for the above header & lower
      // willbe fixed ,only in b/w ui will change 
      // for any change in routes
    <Footer/>  
    </>
  )
}

export default Layout