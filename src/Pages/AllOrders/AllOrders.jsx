import axios from 'axios'
import React, { useEffect } from 'react'



export default function AllOrders() {


  function AllOrders() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
      .then((respons) => (respons.data.data))
      .catch((error) => error);

  }




  useEffect(() => {
    AllOrders()

    return () => {
    }
  }, [])














  return (
    <div>AllOurders</div>
  )
}
