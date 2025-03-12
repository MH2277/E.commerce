
import style from "./ChekOut.module.css"
import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"
import { FaSpinner } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";




export default function ChekOut() {
  let { cashOnDelivry, setNumOfCartItems, setCartId, onlinePayment } = useContext(cartContext)
  const { state } = useLocation()


  let navigate = useNavigate()







  let validationSchema = Yup.object().shape({
    details: Yup.string().required(),
    phone: Yup.string().matches(/^01[0125][0-9]{8}/, "incorect phone").required(),
    city: Yup.string().required(),


  })




  async function handleSubmit(data) {




    if (state === 'Cash') {
      let response = await cashOnDelivry({ shippingAddress: data })

      if (response.data.status == 'success') {
        setNumOfCartItems(0)
        setCartId(null)


        navigate("/allorders")

      }
    } else {
      let response = await onlinePayment({ shippingAddress: data })



      if (response.data.status == "success") {
        

        window.location.href = response.data.session.url
        

        

      }
    }







  }




  let formik = useFormik({
    initialValues: {
      details: '',
      phone: '',
      city: '',

    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit


  })





  return (

   
<>
<Helmet>
    <title> checkOut</title>
  </Helmet>


    <div className="row justify-content-center  align-items-center " >


      <div className="col-xl-6  p-5   ">




        <div className="regester  ">

          <h2 className='w-75 '>ChekOut :</h2>
        </div >


        <form onSubmit={formik.handleSubmit} className='bg-light rounded-3 p-2 ' >



          <div className="mb-3  ">
            <label htmlFor="details" className="form-label">details:</label>
            <input value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className="form-control form-control-m" id="details" />
          </div>
          {formik.errors.details && formik.touched.details ? <div className="alert alert-danger " role="alert">{formik.errors.details} </div> : null}

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">phone:</label>
            <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" className="form-control form-control-m" id="phone" />
          </div>
          {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger " role="alert"> {formik.errors.phone} </div> : null}

          <div className="mb-3">
            <label htmlFor="City" className="form-label">City:</label>
            <input value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className="form-control form-control-m" id="city" />
          </div>
          {formik.errors.city && formik.touched.city ? <div className="alert alert-danger " role="alert">{formik.errors.city} </div> : null}




          <button type='submit' className='btn btn-success w-100'> Pay</button>

        </form>


        <div />




      </div>
    </div >

</>
   
  )
}
