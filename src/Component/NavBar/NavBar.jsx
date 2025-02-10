import { React, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { countConyext } from '../../Context/UserContext';





export default function NavBar() {


    let { counter1 } = useContext(countConyext)



    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" >Navbar</a>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink to={''} className="nav-link active" aria-current="page" >Home {counter1} </NavLink>


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

                        </ul>
                        <div className="d-flex " >
                            <div className='me-2'> <FaInstagram /> </div>
                            <div className='me-2'> <FaFacebook /></div>
                            <div className='me-2'> <FaTiktok /></div>
                            <div className='me-2'> <FaTwitter /></div>
                            <div className='me-2'> <FaLinkedin /></div>
                            <div className='me-2'> <FaYoutube /></div>
                            <div><NavLink className='me-2 text-decoration-none text-dark' to={'Login'} >  Login</NavLink></div>
                            <div> <NavLink className='me-2 text-decoration-none text-dark' to={'Register'} > Register</NavLink></div>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
