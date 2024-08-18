import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import React from 'react'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import User from './components/user/user.jsx'
import Contact from './components/contact/contact.jsx'
import Github from './components/github/github.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
/*
const router = createBrowserRouter([
  {
    path: '/' ,
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact-us',
        element: <Contact/>
      }
    ]
  }
 ])
*/

// another way to declare route ,
//  above one is also a way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      // as inside layout all compo/routes will be there 
      // the lower all 5 components will change but
      // the header and footer will remain same ,\
      //still any doubts ,go & check layout.jsx file
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact-us' element={<Contact/>}/>
      <Route path = 'user/:userid' element= {<User/>}/>
      // to take dynamic values
      <Route path ='github' element={<Github/>} />
       
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
