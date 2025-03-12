
import { useParams } from "react-router-dom"
import React from 'react'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"





export default function CategoriesItem() {

  let {id } = useParams()
  


  const [categoriesItem, setCategoriesItem] = useState(null)


  async function getCategoriesItem(id) {
    await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
      .then((response) => response)
      .catch((error) => error)
  }


  useEffect(() => {
    getCategoriesItem(id)

 
  }, [])






  return (
    <div>CategoriesItem</div>
  )
}
