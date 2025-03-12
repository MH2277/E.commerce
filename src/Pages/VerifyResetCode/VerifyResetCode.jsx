


import React, { useContext, useState } from 'react'
import { useFormik, yupToFormErrors } from "formik"
import axios from 'axios'
import * as Yup from "yup"
import { FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"
import { TokenContext } from '../../Context/TokenContext';



export default function VerifyResetCode() {



  let navigate = useNavigate()
  const [ApiError, setApiError] = useState("")
  const [Loading, setLoading] = useState(false)


  async function handleVerifyResetCode(x) {
    setLoading(true)


    await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', x)
      .then((response) => {

        setApiError(null)
        setLoading(false)

        navigate('/resetPassword')




      })
        .catch((error) =>{


        setLoading(false)
        setApiError(error?.response?.data?.message);

      })




  }




  





  let formik = useFormik({
    initialValues: {
      resetCode: ''


    },

    onSubmit:handleVerifyResetCode


  })



  return (



    <>

      <div className="row justify-content-center  align-items-center">


        <div className="col-12 col-md-8 col-lg-6 col-xl-5 p-3 p-md-5   ">




          <div className="login  ">

            <h2 className='w-75 '>Enter Reset Code :</h2>
            {ApiError ? <div className="alert alert-danger " role="alert">{ApiError} </div> : null} </div >


          <form onSubmit={formik.handleSubmit} className='bg-light rounded-3 p-2 ' >




            <div className="mb-3">
              <label htmlFor="Code" className="form-label">Code:</label>
              <input value={formik.values.Code} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" name='resetCode' className="form-control form-control-sm" id="Code" />
            </div>
            {formik.errors.Code ? <div className="alert alert-danger " role="alert"> {formik.errors.Code} </div> : null}

   
            <button type='submit' className='btn btn-success w-25 flex justify-items-center'> {Loading ? <FaSpinner /> : 'verify'}</button>
          </form>





        </div>
      </div>






    </>)

}