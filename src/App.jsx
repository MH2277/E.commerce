
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
import { Offline, Online } from "react-detect-offline";
import { CiWifiOff } from "react-icons/ci";
import { CartContextProvider } from './Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ChekOut from './Component/ChekOut/ChekOut';
import CategoriesItem from './Pages/CategoriesItem/CategoriesItem';
import WishListContextProvider from './Context/WishListContext';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import VerifyResetCode from './Pages/VerifyResetCode/VerifyResetCode';
import AllOrders from './Pages/AllOrders/AllOrders';
import WishList from './Pages/wishList/wishList';
import ResetPassword from './Pages/ResetPassword/ResetPassword';









function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <MainBage />, children: [

        { index: true, element:  <Home /> },
        { path: 'products', element:  <Products /> },
        { path: 'Cart', element:  <Cart /> },
        { path: 'categories', element:  <Categories /> },
        { path: 'categories/:name/:id', element:  <CategoriesItem /> },
        { path: 'brands', element: <Brands /> },
        { path: 'ProductDetails/:id', element:  <ProductDetails /> },
        { path: 'products/ProductDetails/:id', element:  <ProductDetails /> },
        { path: 'allorders', element:  <AllOrders /> },
        { path: 'wishList', element:  <WishList />},
        { path: 'Register', element: <Register /> },
        { path: 'ChekOut', element: <ProtectedRout> < ChekOut /></ProtectedRout> },
        { path: 'Login', element: <Login /> },
        { path: 'forgetPassword', element: <ForgetPassword/> },
        { path: 'verifyResetCode', element: <VerifyResetCode/> },
        { path: 'resetPassword', element: <ResetPassword/> },

        { path: '*', element: <NotFound /> },








      ]

    }
  ])
  return (
    <>
      <TokenContextProvider>
        <CartContextProvider>
          <WishListContextProvider>
       
          <div className='position-fixed end-0 bottom-0 z-3  fs-5 me-0 rounded w-25 text-center bg-gray-500'>
           <Offline> <CiWifiOff /> You Are offline Now  </Offline>
          </div>
          <RouterProvider router={router}>
          </RouterProvider>
          <Toaster />

          </WishListContextProvider>

        </CartContextProvider>


      </TokenContextProvider>


    </>
  )
}

export default App
