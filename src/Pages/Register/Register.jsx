import React, { useState } from 'react'
import { useFormik, yupToFormErrors } from "formik"
import axios from 'axios'
import * as Yup from "yup"
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom"





export default function Register() {



  let navigate = useNavigate()
  const [ApiError, setApiError] = useState("")
  const [Loading, setLoading] = useState(false)

  async function handleRegister(x) {
    setLoading(true)


    await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', x)
      .then((apiResponse) => {
        setLoading(false)
        navigate('/Login')
      })
      .catch(function (apiResponse) {
        setLoading(false)
        setApiError(apiResponse?.response?.data?.message);

      })








  }



  let validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'name must 3 character').max(10, 'name masr max 10 character'),
    email: Yup.string().email('invalied email'),
    // password:Yup.string().matches('/^[a-x]/','invalid password'),
    // rePassword:Yup.string().oneOf([Yup.ref('password')],"rePassword must matched password"),
    phone: Yup.string().matches(/^01[0125][0-9]{8}/, "incorect phone")



  })





  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',

    },
    validationSchema: validationSchema,
    onSubmit: handleRegister


  })



  return (
    <>





      <div className="row justify-content-center  align-items-center">


        <div className="col-xl-6  p-5   ">




          <div className="regester  ">

            <h2 className='w-75 '>Register Now :</h2>
            {ApiError ? <div className="alert alert-danger " role="alert">{ApiError} </div> : null} </div >


          <form onSubmit={formik.handleSubmit} className='bg-light rounded-3 ' >



            <div className="mb-3  ">
              <label htmlFor="name" className="form-label">Name:</label>
              <input value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className="form-control form-control-sm" id="name" />
            </div>
            {formik.errors.name ? <div className="alert alert-danger " role="alert">{formik.errors.name} </div> : null}

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" className="form-control form-control-sm" id="email" />
            </div>
            {formik.errors.email ? <div className="alert alert-danger " role="alert"> {formik.errors.email} </div> : null}

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="" type="password" className="form-control form-control-sm" id="password" />
            </div>
            {formik.errors.password ? <div className="alert alert-danger " role="alert">{formik.errors.password} </div> : null}


            <div className="mb-3">
              <label htmlFor="rePassword" className="form-label  " autoComplete="new-password">rePassword:</label>
              <input value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="" type="password" className="form-control form-control-sm" id="rePassword" />
            </div>
            {formik.errors.rePassword ? <div className="alert alert-danger " role="alert">{formik.errors.rePassword} </div> : null}


            <div className="mb-3">
              <label htmlFor="phone" className="form-label" >Phone:</label>
              <input value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" className="form-control form-control-sm" id="phone" />
            </div>
            {formik.errors.phone ? <div className="alert alert-danger " role="alert">{formik.errors.phone} </div> : null}


            <button type='submit' className='btn btn-success w-25'> {Loading ? <FaSpinner /> : 'Submit'}</button>

          </form>


          <div />




        </div>
      </div>









    </>

  )

}