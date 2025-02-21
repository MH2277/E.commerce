
import axios from "axios";
import style from "./CategorySlider.module.css"
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";




export default function CategorySlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 

  const [categories, setCategories] = useState([])

  async function getCategories() {

    await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
      .then((res) => {
        setCategories(res.data.data)
      })
      .catch((err) => {
        console.log(err);

      })


  }

  useEffect(() => {
    getCategories()


  }, [])






  return (

    <>
      <div className="my-5  mx-5" >



        <Slider {...settings}>

          {categories.map((category) => (


            <div key={category._id}>
               <img src={category.image} className="w-100 category-style text-success" alt={category.name} />
               <h5 className="text-center text-success fw-light fst-italic mt-2">{category.name}</h5>

            </div>
          ))}


        </Slider>

      </div >














    </>
  )
}

