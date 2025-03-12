
import { Outlet } from "react-router-dom"
import style from "./MainBage.module.css"
import React from 'react'
import Footer from "../../Component/Footer/Footer"
import NavBar from "../../Component/NavBar/NavBar"
import Loader from "../../Component/Loader/Loader"



export default function MainBage() {
  return (
    <>
      <NavBar />

      <div className="container min-vh-100">

        <Outlet></Outlet>


        </div>

        <Footer />


            

    </>


  )
}

