import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Brands from './Pages/Brands/Brands';
import MainBage from './Pages/MainBage/MainBage';
import Products from "./Pages/Products/Products"
import Categories from "./Pages/Categories/Categories"
import Cart from "./Pages/Cart/Cart"
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { CounterContextProvider } from './Context/UserContext';
import { TokenContextProvider } from './Context/TokenContext';



function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <MainBage />, children: [

        { index: true, element: <Home /> },
        { path: 'Products', element: <Products /> },
        { path: 'Cart', element: <Cart /> },
        { path: 'Categories', element: <Categories /> },
        { path: 'Brands', element: <Brands /> },
        { path: 'Register', element: <Register /> },
        { path: 'Login', element: <Login /> }




      ]

    }
  ])
  return (
    <>
      <TokenContextProvider>
        <CounterContextProvider>
          <RouterProvider router={router}> </RouterProvider>
        </CounterContextProvider>
      </TokenContextProvider>


    </>
  )
}

export default App
