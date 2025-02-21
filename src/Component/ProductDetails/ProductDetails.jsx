
import { useParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaStar } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";








export default function ProducDetails() {

  let { id } = useParams()

  const [productDetail, setProductDetail] = useState(null)

  function getProductDetails(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((response) => {
        setProductDetail(response.data.data)

      })

      .catch(() => { })

  }




  useEffect(() => {

    getProductDetails(id)
  }, [])














  return (
    <>


      <div className="row my-5">

        <div className=" col-md-12  col-xl-4 ">
          <img src={productDetail?.imageCover} className="w-100" alt="" />

        </div>





        <div className="col-md-12 col-xl-8 align-content-center ">
          <div className="dev ">
            <h2>{productDetail?.title}</h2>
            <p>{productDetail?.description}</p>
            <small className="fw-bold">{productDetail?.category?.name} </small>

            <div className="d-flex justify-content-between align-items-center ">
              <h6 className="fw-light my-2"> {productDetail?.price} EGP</h6>
              <h6 className="fw-light">{productDetail?.ratingsAverage} <FaStar className="text-warning " /></h6>

            </div>

            <div className="d-flex justify-content-center align-items-center py-2">
              <button className="btn btn-success w-100    ">Add to Cart</button> </div>


          </div>
        </div>

      </div>

    </>)
}
