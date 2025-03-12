


import React, { useContext, useState } from 'react'
import { useFormik, yupToFormErrors } from "formik"
import axios from 'axios'
import * as Yup from "yup"
import { FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"
import { TokenContext } from '../../Context/TokenContext';



export default function ResetPassword() {



  let navigate = useNavigate()
  const [ApiError, setApiError] = useState("")
  const [Loading, setLoading] = useState(false)
  let headers = { token: localStorage.getItem('token') }



  async function handleUdateLoggeduserpassword(x) {

    setLoading(true)


    await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', x, { headers })
      .then((response) => {

        setApiError(null)
        setLoading(false)
        navigate('/')





      })
      .catch((error) => {


        setLoading(false)
        setApiError(error?.response?.data?.message);

      })








  }



  let validationSchema = Yup.object().shape({
    email: Yup.string().email('invalied email'),

  })





  let formik = useFormik({
    initialValues: {
      email: '',
      newPassword: '',


    },
    validationSchema: validationSchema,
    onSubmit: handleUdateLoggeduserpassword


  })



  return (



    <>

      <div className="row justify-content-center  align-items-center">


        <div className="col-12 col-md-8 col-lg-6 col-xl-5 p-3 p-md-5   ">




          <div className="login  ">

            <h2 className='w-75 '>New Password :</h2>
            {ApiError ? <div className="alert alert-danger " role="alert">{ApiError} </div> : null} </div >


          <form onSubmit={formik.handleSubmit} className='bg-light rounded-3 p-2' >





            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input value={formik.values.email} onChange={formik.handleChange} name='email' onBlur={formik.handleBlur} type="email" className="form-control form-control-sm" id="email" autoComplete ='email' />
            </div>
            {formik.errors.email ? <div className="alert alert-danger " role="alert"> {formik.errors.email} </div> : null}



            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label" >NewPassword:</label>
              <input value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} name='newPassword' type="password" className="form-control form-control-sm" id="newPassword" autoComplete="current-password" />
            </div>
            {formik.errors.Code ? <div className="alert alert-danger " role="alert"> {formik.errors.Code} </div> : null}


            <button type='submit' className='btn btn-success w-25 flex justify-items-center'> {Loading ? <FaSpinner /> : 'verify'}</button>
          </form >





        </div >
      </div >






    </>)

}