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
import { TokenContextProvider } from './Context/TokenContext';
import ProtectedRout from './Component/ProtectedRout/ProtectedRout';
import NotFound from './Pages/NotFound/NotFound';
import ProductDetails from './Component/ProductDetails/ProductDetails';




function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <MainBage />, children: [

        { index: true, element:<ProtectedRout> <Home /></ProtectedRout> },
        { path: 'Products', element: <ProtectedRout> <Products /></ProtectedRout>},
        { path: 'Cart', element: <ProtectedRout> <Cart /></ProtectedRout> },
        { path: 'Categories', element: <ProtectedRout> <Categories /></ProtectedRout> },
        { path: 'Brands', element:<ProtectedRout> <Brands /></ProtectedRout> },
        { path: 'ProductDetails/:id', element:<ProtectedRout> <ProductDetails /></ProtectedRout> },
        { path: 'Register', element: <Register /> },
        { path: 'Login', element: <Login /> },
        { path: '*', element: <NotFound /> },

        
        





      ]

    }
  ])
  return (
    <>
      <TokenContextProvider>
          <RouterProvider router={router}> </RouterProvider>
      </TokenContextProvider>


    </>
  )
}

export default App
