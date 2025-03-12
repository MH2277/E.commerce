
import { useParams } from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { FaStar } from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { cartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";







const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 1000,

}


export default function ProducDetails() {
  let { AddToCart, setNumOfCartItems, setCartId } = useContext(cartContext)


  let { id } = useParams()

  const [productDetail, setProductDetail] = useState(null)

  function getProductDetails(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((response) => {
        setProductDetail(response.data.data)

      })

      .catch(() => { })

  }


  async function addCartProduct(productId) {
    let response = await AddToCart(productId)

    if (response.data?.status === 'success') {
      setNumOfCartItems(response.data.numOfCartItems);
      setCartId(response.data.cartId);
      toast.success('Product added successfully to your cart');


    } else {
      toast.error('This is an error!');


    }

  }





  useEffect(() => {

    getProductDetails(id)
  }, [])








  return (
    <>

      <Helmet>
        <title>{`${productDetail?.title}`} </title>
      </Helmet>

      <div className="row my-5 "  >


        <div className=" col-md-12  col-xl-4 ">
          <Slider {...settings} >

            {productDetail?.images.map((imge) =>
              (<img key={productDetail._id} src={imge} alt="" />))}

          </Slider>
        </div>





        <div className="col-md-12 col-xl-8 align-content-center my-5 "  >
          <div className="dev " >
            <h2>{productDetail?.title}</h2>
            <p>{productDetail?.description}</p>
            <small className="fw-bold">{productDetail?.category?.name} </small>

            <div className="d-flex justify-content-between align-items-center ">
              <h6 className="fw-light my-2"> {productDetail?.price} EGP</h6>
              <h6 className="fw-light">{productDetail?.ratingsAverage} <FaStar className="text-warning " /></h6>

            </div>

            <div className="d-flex justify-content-center align-items-center py-2">
              <button onClick={() => addCartProduct(productDetail._id)} className="btn btn-success w-100    ">Add to Cart</button> </div>


          </div>
        </div>

      </div>

    </>)
}
