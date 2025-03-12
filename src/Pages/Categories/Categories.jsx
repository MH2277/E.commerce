
import { Helmet } from "react-helmet"
import style from "./Categores.module.css"
import React from 'react'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Loader from "../../Component/Loader/Loader"





export default function Categores() {


  const [categories, setCategories] = useState([])

  async function getCategories() {
    await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((response) =>  setCategories(response.data.data))
      .catch((error) => error)


  }


  useEffect(() => {
    getCategories()


  }, [])






  return (

    <>
      <Helmet>
        <title>Categories </title>
      </Helmet>


      {categories?.length > 0 ? (
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16 mt-5">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              {categories?.map((category) =>

                
                  <div className=" bg-white border border-indigo-600 drop-shadow-md rounded " key={category._id}>

                    <Link to={`./${category.name}/${category._id}`} className="" >

                      <img className="w-100 h-60" src={category.image} />


                      <h4 className=" text-center font-medium text-success my-3">{category.name} </h4>
                    </Link>
                  </div>
                


              )}





            </div>
          </div>
        </section>) :
        (<div className="position-absolute top-50 start-50 text-9xl">
          <Loader />
        </div>)}


    </>
  )
}
