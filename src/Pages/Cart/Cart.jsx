
import { Helmet } from "react-helmet"
import React from 'react'
import { cartContext } from "../../Context/CartContext"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"




export default function Cart() {
  let navigat = useNavigate()


  let { getLoggedUserCat, deletCart, updatCart, clearCart, setNumOfCartItems, numOfCartItems, setCartId } = useContext(cartContext)
  const [cartDetail, setCartDetail] = useState(null)
  const [paymentMethode, setPaymentMethode] = useState("Cash")





  async function removeCartItem(productId) {

    let response = await deletCart(productId)
    setNumOfCartItems(response.data.numOfCartItems);
    setCartId(response.data.cartId);

    setCartDetail(response.data)





  }
  async function updateCartItem(productId, count) {

    let response = await updatCart(productId, count)
    setCartDetail(response.data)




  }
  async function clearCartItem() {

    let response = await clearCart()

    setCartDetail(null)
    setNumOfCartItems(0)



  }




  async function getCart() {

    let response = await getLoggedUserCat()
    setCartDetail(response.data)




  }




  useEffect(() => {
    getCart()


  }, [])



  if (numOfCartItems == 0) {
    return <h2> No Products in Your Cart </h2>

  }


  return (
    <>
      <Helmet>
        <title> cart </title>
      </Helmet>




      <div className="flex justify-center items-center overflow-x-hidden p-4 sm:p-10">
  <div className="min-w-full inline-block align-middle">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-2 sm:px-4 py-3">Image</th>
          <th scope="col" className="px-2 sm:px-4 py-3">Product</th>
          <th scope="col" className="px-2 sm:px-4 py-3">Qty</th>
          <th scope="col" className="px-2 sm:px-4 py-3">Price</th>
          <th scope="col" className="px-2 sm:px-4 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {cartDetail?.data.products.map((product) => (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" key={product._id}>
            <td className="p-2 sm:p-4">
              <img src={product.product.imageCover} className="w-12 sm:w-16 md:w-24 max-w-full max-h-full" alt="Apple Watch" />
            </td>
            <td className="px-2 sm:px-4 py-4 font-semibold text-gray-900 dark:text-white">
              {product.product.title.split(" ").slice(0, 2).join(" ")}
            </td>
            <td className="px-2 sm:px-4 py-4">
              <div className="flex items-center">
                <button onClick={() => updateCartItem(product.product.id, product.count - 1)} className="inline-flex items-center justify-center p-1 me-2 sm:me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                  <span className="sr-only">Quantity button</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                  </svg>
                </button>
                <div>
                  <span>{product.count}</span>
                </div>
                <button onClick={() => updateCartItem(product.product.id, product.count + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-2 sm:ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                  <span className="sr-only">Quantity button</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>
            </td>
            <td className="px-2 sm:px-4 py-4 font-semibold text-gray-900 dark:text-white">
              {product.price} EGP
            </td>
            <td className="px-2 sm:px-4 py-4">
              <button onClick={() => removeCartItem(product.product.id)} className="fs-5 text-danger pointer-event"><FaTrashAlt /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



      <div className="flex flex-col sm:flex-row justify-between mt-5 px-4 sm:px-0">
        <h4 className="text-lg sm:text-xl">Shopping Cart</h4>
        <span className="text-lg sm:text-xl font-semibold">Total Price: {cartDetail?.data?.totalCartPrice} EGP</span>
      </div>

      <div className="flex justify-center items-center mt-5">
        <button onClick={() => clearCartItem()} className="btn btn-danger w-40 sm:w-1/6">Clear Cart</button>
      </div>

      <form className="max-w-sm mx-auto  my-2">
        <select onChange={(e) => { setPaymentMethode(e.target.value) }} name="Payment" id="Payment" className="text-center bg-green-700 border-none text-white text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500">
          <option  value="Cash">Cash</option>
          <option  value="Online">Online</option>
        </select>
      </form>

      <button  onClick={() => navigat('/ChekOut', { state: paymentMethode })} className="btn bg-success w-full text-white ">Checkout</button>



    </>








  )
}
