
import axios from "axios"
import style from "./Brands.module.css"
import React from 'react'
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import Loader from "../../Component/Loader/Loader"




export default function Brands() {

  const [Brands, setBrands] = useState(null)

  async function getBrands() {
    await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)


      .then((response) => {
        setBrands(response.data.data);
      })


      .catch((error) => error)




  }





  useEffect(() => {
    getBrands()

  }, [])



  return (
    <>

      <Helmet>
        <title> brands</title>
      </Helmet>


      {Brands?.length > 0 ?(
      <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16 mt-5">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            {Brands?.map((brand) =>


              <div className=" items-center rounded-lg border border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" key={brand._id}>
                <div><img src={brand.image} /></div>

                <h5 className="text-sm font-medium text-gray-900 dark:text-white text-center text-decoration-none ">{brand.name}</h5>
              </div>
            )}




          </div>
        </div>
      </section>):( <div className="position-absolute top-50 start-50 text-9xl">
      
       <Loader  />
        </div>)}


    </>
  )
}
