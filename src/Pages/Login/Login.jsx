
import React, { useContext, useState } from 'react'
import { useFormik, yupToFormErrors } from "formik"
import axios from 'axios'
import * as Yup from "yup"
import { FaSpinner } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"
import { TokenContext } from '../../Context/TokenContext';



export default function Login() {



  let navigate = useNavigate()
  const [ApiError, setApiError] = useState("")
  const [Loading, setLoading] = useState(false)
  let { setToken } = useContext(TokenContext)


  async function handleLogin(x) {
    setLoading(true)


    await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', x)
      .then((apiResponse) => {
        console.log(apiResponse);
        setToken(apiResponse.data.token)
        localStorage.setItem('token', apiResponse.data.token)
        setApiError(null)
        setLoading(false)

        navigate('/')




      })
      .catch(function (apiResponse) {
        setLoading(false)
        setApiError(apiResponse?.response?.data?.message);

      })








  }



  let validationSchema = Yup.object().shape({
    email: Yup.string().email('invalied email'),

  })





  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',


    },
    validationSchema: validationSchema,
    onSubmit: handleLogin


  })



  return (



    <>


      <div className='p-5'>

        {ApiError ? <div className="alert alert-danger " role="alert">{ApiError} </div> : null
        }
        <div><h2>Login Now :</h2></div>


        <form onSubmit={formik.handleSubmit} className=' bg-light w-75 justify-content-center d-flex flex-column'>




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



          <button type='submit' className='btn btn-success w-25'> {Loading ? <FaSpinner /> : 'Login'}</button> 
          <Link to={'/Register'}> creat new account</Link>

        </form>

      </div>





    </>)

}