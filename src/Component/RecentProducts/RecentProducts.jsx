
import style from "./RecentProducts.module.css"
import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { cartContext } from "../../Context/CartContext";
import { toast } from 'react-hot-toast';
import { FaRegHeart } from "react-icons/fa";
import { WishListContext } from "../../Context/WishListContext";
import { Helmet } from "react-helmet";
import { FaHeart } from "react-icons/fa";










export default function RecentProducts() {

  let { AddToCart, setNumOfCartItems, setCartId } = useContext(cartContext)
  let { addproductToWishList, getLoggedUsetWishList, deletWishList } = useContext(WishListContext)
  const [recentProducts, setRecentProducts] = useState([])

  const [addToWishList, setAddToWishList] = useState(false)
  const [wishListProductsClicked, setWishListProductsClicked] = useState([])


  async function addCartItem(productId) {

    let response = await AddToCart(productId)

    if (response.data?.status === 'success') {
      setNumOfCartItems(response.data.numOfCartItems);
      setCartId(response.data.cartId);
      toast.success('Product added successfully to your cart');


    } else {
      toast.error('This is an error!');


    }

  }



  function getRecentProducts() {
    axios.get('https://ecommerce.routemisr.com/api/v1/products')
      .then((response) => {
        setRecentProducts(response.data.data)

      })

      .catch(() => { })

  }





  async function addWishlist(productId) {




    let response = await addproductToWishList(productId)

    if (response.data?.status === 'success') {

      toast.success('Product added successfully to your Wish-List');
      setAddToWishList()




    } else {
      toast.error('This is an error!');



    }

  }

  async function getWishListProduct() {
    const data = await getLoggedUsetWishList()
    const wishProducts = data.data?.data.map((product) => product._id)
    setWishListProductsClicked(wishProducts)

    

  }
  async function toggleWishlist(productId) {
    if (wishListProductsClicked?.includes(productId)) {
      const data = await deletWishList(productId)
      getWishListProduct()



    } else {

      const data = await addWishlist(productId)
      getWishListProduct()



    }




  }



  useEffect(() => {
    getRecentProducts()
    getWishListProduct()




  }, [])




  return (
    <>
      <Helmet>
        <title> home </title>
      </Helmet>

      {
        recentProducts.length > 0 ? (
          <div className="row g-3">
            {recentProducts.map((product) => (
              <div className="col-xl-2 col-sm-12 col-md-6 col-lg-4" key={product.id}>
                <div className="product p-2 position-relative">
                  <button
                    onClick={() => toggleWishlist(product._id)}
                    className="position-absolute top-1 end-2 fs-5 heart text-black "
                  >
                    {wishListProductsClicked?.includes(product._id) ? <FaHeart className='text-red-500' /> : <FaRegHeart />}

                  </button>

                  <Link to={`ProductDetails/${product.id}`} className="decoration">
                    <img src={product.imageCover} className="w-100 py-3" alt={product.title} />
                    <div className="p-2">
                      <h6 className="text-success m-0">{product.category.name}</h6>
                      <span className="my-1">{product.title.split(" ").slice(0, 2).join(" ")}</span>

                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="fw-light">{product.price} EGP</h6>
                        <h6 className="">
                          {product.ratingsAverage} <FaStar className="text-warning" />
                        </h6>
                      </div>
                    </div>
                  </Link>

                  <div className="d-flex justify-content-center align-items-center py-2">
                    <button
                      onClick={() => addCartItem(product.id)}
                      className="btn btn-success w-75"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Loader />

        )
      }

    </>

  )

}
