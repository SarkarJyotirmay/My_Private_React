import React from 'react'
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Nav from './Nav'
import Layout from './Layout'

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <><Nav /> <Home /></>
//     },
//     {
//       path: "/about",
//       element: <About />
//     },
//     {
//       path: "/contact",
//       element: <Contact />
//     },
//   ]
// )
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children:[
        {index: true, element: <Home />},
        {path: "/about", element:<About />},
        {path: "/contact", element:<Contact />},
      ]
    }
  ]
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App