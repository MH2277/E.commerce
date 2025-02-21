
import style from "./RecentProducts.module.css"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";






export default function RecentProducts() {

  const [recentProducts, setRecentProducts] = useState([])

  function getRecentProducts() {
    axios.get('https://ecommerce.routemisr.com/api/v1/products')
      .then((response) => {
        setRecentProducts(response.data.data)

      })

      .catch(() => { })

  }




  useEffect(() => {
    getRecentProducts()

    return () => {

    }
  }, [])




  return (
    <div className="row  ">


      {recentProducts.map((product) =>

        <div className="col-xl-2 col-sm-12 col-md-6 col-lg-4 p-2  " key={product._id}>

          <div className="product p-hover     ">



            <Link to={`ProductDetails/${product.id}`} className="decoration">
              <img src={product.imageCover} className="w-100 py-3" alt="" />
              <div className="div p-2">

                <h6 className="text-success m-0  ">{product.category.name} </h6>
                <span className="my-1 " >{product.title.split(" ").slice(0, 2).join(" ")}</span>


                <div className="d-flex justify-content-between align-items-center ">
                  <h6 className="fw-light"> {product.price} EGP</h6>
                  <h6 className="">{product.ratingsAverage} <FaStar className="text-warning " /></h6>

                </div>

              </div>



            </Link>

<div className="d-flex justify-content-center align-items-center py-2"> <button  className="btn btn-success w-75    ">Add to Cart</button> </div>
           

          </div>
        </div>

      )}
    </div>


  )

}
