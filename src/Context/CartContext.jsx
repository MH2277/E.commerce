import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { useActionState } from "react";
import { TokenContext } from "./TokenContext";
TokenContext





export let cartContext = createContext()



export function CartContextProvider(props) {


  const [numOfCartItems, setNumOfCartItems] = useState(0)
  const [cartId, setCartId] = useState(null)

  let headers = { token: localStorage.getItem('token') }


  async function AddToCart(productId) {
    return await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
      productId
    }, { headers })
      .then((response) => (response))

      .catch((error) => error)


  }


  async function getLoggedUserCat() {


    return await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
      .then((response) => response)

      .catch((error) => error)


  }


  async function deletCart(productId) {
    return await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { headers })
      .then((respons) => respons)
      .catch((error) => error)
  }


  async function updatCart(productId, count) {
    return await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { count }, { headers })
      .then((respons) => respons)
      .catch((error) => error)
  }


  async function clearCart() {
    return await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
      .then((response) => response)
      .catch((error) => error)
  }





  async function getCArt() {
    let response = await getLoggedUserCat()
    setNumOfCartItems(response.data.numOfCartItems);
    setCartId(response.data.cartId);









  }







  async function cashOnDelivry(data) {
    return await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, data, { headers })

  }




  async function onlinePayment(data) {
    return await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://freshcart-azure.vercel.app`, data, { headers })

      .then((response) => response)
      .catch((error) => error)


  }




  useEffect(() => {
    if (localStorage.getItem('token') != null) {
      getCArt()
    }


  }, [])








  return <cartContext.Provider value={{ AddToCart, getLoggedUserCat, deletCart, updatCart, numOfCartItems, cartId, setNumOfCartItems, setCartId, onlinePayment, clearCart, cashOnDelivry }}>
    {props.children}

  </cartContext.Provider>

}