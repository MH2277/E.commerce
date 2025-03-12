import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'












export let WishListContext = createContext()

export default function WishListContextProvider(props) {

    let headers = { token: localStorage.getItem('token') }

    

    async function addproductToWishList(productId) {


        return await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, { productId }, { headers })
            .then((response) => response)
             
            .catch((error) => error.response.data)
            


    }



    async function getLoggedUsetWishList() {
        return await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, { headers })
            .then((response) => response)
             
            .catch((error) => error)


    }
    async function getWishlist() {

        let response = await getLoggedUsetWishList()

    }


    async function deletWishList(productId) {
        return await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, { headers })
        .then((response) => response)  
        .catch((error) => error.response.data);  


    }






    useEffect(() => {
        getWishlist()

        return () => {

        }
    }, [])





    return <WishListContext.Provider value={{ addproductToWishList, getLoggedUsetWishList,deletWishList }} >
        {props.children}
    </WishListContext.Provider>

}
