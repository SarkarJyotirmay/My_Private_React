import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import First from './pages/First'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import SignUp from './pages/SignUp'
import SingleProduct from './components/SingleProduct'
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <First />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/wishlist",
          element: <WishList />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/product/:id",
          element: <SingleProduct />
        },
        {
          path:"*",
          element: <NotFound />
        }
      ]
    }
  ]
)

function App() {
  return (
    <RouterProvider  router={router}/>
  )
}

export default App