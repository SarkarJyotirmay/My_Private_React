import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Layout from './Layout'

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Home />
//     },
//     {
//       path: "/about",
//       element: <><Home /> <About /></>
//     },
//     {
//       path: "/contact",
//       element : <Contact />
//     }
//   ]
// )
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, // this means: when path === "/", render Home
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App