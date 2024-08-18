import React from 'react'
import Header from './components/header/header'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import {Outlet} from 'react-router-dom'


/* its for the above header & lower footer 
   will be fixed ,only in b/w UI will change 
   for any change in routes
*/

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/> 
    <Footer/>  
    </>
  )
}

export default Layout