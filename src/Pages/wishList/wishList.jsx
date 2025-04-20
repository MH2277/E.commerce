
import React, { useEffect, useState } from 'react'
import { useContext } from "react"
import { WishListContext } from "../../Context/WishListContext"
import toast from "react-hot-toast"
import { cartContext } from "../../Context/CartContext"
import { RiDeleteBin6Line } from "react-icons/ri";
import { Helmet } from 'react-helmet'
import { TokenContext } from '../../Context/TokenContext'










export default function WishList() {


  let { getLoggedUsetWishList, deletWishList } = useContext(WishListContext)
  let { AddToCart, setNumOfCartItems, setCartId } = useContext(cartContext)
  let { token } = useContext(TokenContext)

  const [wishList, setWishlist] = useState([])




  async function getWishlist() {

    let response = await getLoggedUsetWishList()
    setWishlist(response.data.data);



  }



  async function deletproductFromWashList(productId) {
    let response = await deletWishList(productId)
    if (response.data.status === 'success') {

      toast.success('Product Delete successfully ');


    } else {
      toast.error('This is an error!');

    }
    getWishlist()



  }



  async function addCartProduct(productId) {


    if (!token) {

      toast.error('must login');
      return;

    }
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
    getWishlist()

    return () => {

    }
  }, [])


  if (wishList.length == 0) {
    return <h2>NO FAV PRODUCTS</h2>
  }




  return (


    <>
      <Helmet>
        <title> wishList </title>
      </Helmet>




      {<div className="py-12">

        <div className="flex flex-col justify-start items-start">
          <div className="px-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
            <h1 className="text-2xl sm:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Favourites</h1>
            <p className="text-sm sm:text-base leading-4 text-gray-600 dark:text-white pb-1">({wishList.length}) </p>
          </div>

          <div className="w-full mt-8 overflow-x-auto">
            <table className="w-full mt-8 border-collapse">

              <thead aria-label="table heading" className="w-full h-16 py-6">
                <tr className="border-2 border-solid">
                  <th className="text-sm sm:text-base font-small leading-4 text-black border border-gray-950 text-center bg-gray-300"> Remove </th>
                  <th className="text-sm sm:text-base font-small leading-4 text-black border border-gray-950 text-center bg-gray-300">YOUR PRODUCT</th>
                  <th className="text-sm sm:text-base font-small leading-4 text-black border border-gray-950 text-center bg-gray-300">DESCRIPTION</th>
                  <th className="text-sm sm:text-base font-small leading-4 text-black border border-gray-950 text-center bg-gray-300">PRICE</th>
                  <th className="ext-sm sm:text-base font-small leading-4 text-black border border-gray-950 text-center bg-gray-300"> Add to cart </th>
                </tr>
              </thead>

              <tbody className="w-full text-left">
                {wishList?.map((product) => (
                  <tr key={product._id} className="border-t border-gray-300">
                    <td className="border border-gray-300 text-center p-2">
                      <button onClick={() => { deletproductFromWashList(product._id) }} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800">
                        <span className="text-2xl"><RiDeleteBin6Line /></span>
                      </button>
                    </td>

                    <td className="border border-gray-300 w-25 ">
                      <div className='flex justify-center items-center'><img className=" w-full sm:w-1/2 p-2" src={product.imageCover} alt="shoe" /></div>
                    </td>

                    <td className="border border-gray-300 text-center w-1/3  p-2">
                      <p className="text-sm sm:text-base leading-4 text-gray-800 dark:text-white">{product.description}</p>
                    </td>

                    <td className="border border-gray-300 text-center p-2">
                      <p className="dark:text-white">{product.price} EGP</p>
                    </td>

                    <td className="border border-gray-300 text-center  p-2">
                      <button onClick={() => addCartProduct(product._id)} className="btn btn-success ">Add To Cart</button>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>}




    </>




  )
}
