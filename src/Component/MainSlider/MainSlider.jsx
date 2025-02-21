
import style from "./MainSlider.module.css"
import React from 'react'
import img1 from '../../assets/slider-image-1.jpeg'
import img2 from '../../assets/slider-image-2.jpeg'
import img3 from '../../assets/slider-image-3.jpeg'
import Slider from "react-slick";







export default function MainSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,

  }


  return (
      <>





      <div className="row my-5">

        <div className="w-75  ">
          <Slider {...settings}>

            <div>
              <img className="w-100 pic2 " src={img1} alt="" />
            </div>

            <div>
              <img className="w-100 pic2 " src={img2} alt="" />
            </div>

            <div>
              <img className="w-100 pic2 " src={img3} alt="" />
            </div>



          </Slider>



          </div>


          <div className="w-25  ">
            <img className="w-100 pic1" src={img2} alt="" />
            <img className="w-100 pic1 " src={img3} alt="" />
          </div>


        </div>







      </>

      )
}
