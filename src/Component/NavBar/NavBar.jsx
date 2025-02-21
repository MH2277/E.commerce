import { React, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { TokenContext } from '../../Context/TokenContext';
import logo from '../../assets/logo.svg'





export default function NavBar() {

    let navigate = useNavigate

    let { token, setToken } = useContext(TokenContext)

    function logoutUser() {
        localStorage.removeItem('token')
        navigate('Login')
        setToken(null)


    }


    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">

                    <button className="navbar-toggler" type="button"
                     data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                         aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div><img src={logo} alt="" /></div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {token &&

                                <>

                                    <li className="nav-item">
                                        <NavLink to={''} className="nav-link active" aria-current="page" >Home  </NavLink>


                                    </li>

                                    <li className="nav-item">
                                        <NavLink to={"Cart"} className="nav-link" >Cart</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to={'Products'} className="nav-link" >Products</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to={'Categories'} className="nav-link" >Categories</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to={'Brands'} className="nav-link" >Brands</NavLink>
                                    </li>
                                </>


                            }



                        </ul>
                        <div className="d-flex " >
                            <div className='me-4'> <FaInstagram /> </div>
                            <div className='me-4'> <FaFacebook /></div>
                            <div className='me-4'> <FaTiktok /></div>
                            <div className='me-4'> <FaTwitter /></div>
                            <div className='me-4'> <FaLinkedin /></div>
                            <div className='me-4'> <FaYoutube /></div>

                            {token && <div><NavLink className='me-4 text-decoration-none text-dark' to={'Login'} onClick={() => { logoutUser() }} >  SignOut</NavLink></div>}

                            {!token &&
                                <>
                                    <div><NavLink className='me-4 text-decoration-none text-dark' to={'Login'} >  Login</NavLink> </div>
                                    <div> <NavLink className='me-4 text-decoration-none text-dark' to={'Register'} > Register</NavLink></div>
                                </>
                            }
                        </div>
                    </div>

                </div>
            </nav>

        </>
    )
}
