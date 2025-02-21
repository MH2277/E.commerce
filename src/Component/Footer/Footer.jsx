
import style from "./Footer.module.css"
import React from 'react'
import logo from '../../assets/logo.svg'



export default function Footer() {
  return (
    <>


      {<footer className="bg-body-tertiary text-center  text-lg-start mt-5  ">
        <div className="container-fluid p-4">


          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 align-content-center">
              <img src={logo} alt="" />
            </div>




            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Footer text</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                voluptatem veniam, est atque cumque eum delectus sint!
              </p>
            </div>
          </div>
        </div>
      </footer>}


    </>



  )
}
