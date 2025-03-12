import { React, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { TokenContext } from '../../Context/TokenContext';
import logo from '../../assets/logo.svg'
import { FaCartArrowDown } from "react-icons/fa";
import { cartContext } from '../../Context/CartContext';
import { FaRegHeart } from "react-icons/fa";






export default function NavBar() {

    let { numOfCartItems } = useContext(cartContext)

    let navigate = useNavigate

    let { token, setToken } = useContext(TokenContext)

 
    function logoutUser() {
        localStorage.removeItem('token')
        navigate('Login')
        setToken(null)


    }



    return (

        <>


            <nav className="bg-gray-100 dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Fresh Cart Logo" />
                    </div>








                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>













                    {token &&
                        (<div className="hidden w-full md:flex md:w-auto md:order-1" >
                            <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse mt-4  md:mt-0">
                                <li>
                                    <NavLink to="/" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/categories" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Categories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/brands" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brands</NavLink>
                                </li>
                            </ul>
                        </div>)}












                    <div className="hidden w-full md:flex md:w-auto md:order-2 ms-48"  >
                        <ul className="flex flex-row md:flex-row md:space-x-8 rtl:space-x-reverse mt-4 md:mt-0 items-center">
                            <li className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                                <FaInstagram />
                            </li>
                            <li className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                                <FaFacebook />
                            </li>
                            <li className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                                <FaTiktok />
                            </li>
                            <li className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                                <FaTwitter />
                            </li>
                            <li className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                                <FaLinkedin />
                            </li>
                            <li className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                                <FaYoutube />
                            </li>

                            {token && (
                                <>
                                    <li>
                                        <NavLink to="/cart" className="text-decoration-none text-dark d-flex fs-5 position-relative">
                                            <FaCartArrowDown />
                                            <span className="ms-2 fs-6 text-center fw-bold cart-decoration">{numOfCartItems}</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/WishList" className="text-decoration-none text-dark d-flex fs-5">
                                            <FaRegHeart />
                                        </NavLink>
                                    </li>
                                </>
                            )}

                            {token ? (
                                <li>
                                    <NavLink to="/Login" className="text-decoration-none text-dark" onClick={logoutUser}>
                                        Sign Out
                                    </NavLink>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/Login" className="text-decoration-none text-dark">
                                            Login
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Register" className="text-decoration-none text-dark">
                                            Register
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>





          










                    <div className="md:hidden w-full" id="navbar-sticky">
                        <ul className="flex flex-col space-y-2 mt-4">
                            {token && (
                                <>
                                    <li>
                                        <NavLink to="/" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/products" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Products</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/categories" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Categories</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/brands" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brands</NavLink>
                                    </li>


                                    <li>
                                        <NavLink to="/cart" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                                            Cart ({numOfCartItems})
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/WishList" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                                            Wishlist
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/Login" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300" onClick={logoutUser}>
                                            Sign Out
                                        </NavLink>
                                    </li>

                                </>
                            )}

                            {!token && (


                                <>
                                    <li>
                                        <NavLink to="/Login" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                                            Login
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Register" className="block no-underline text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                                            Register
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>




        </>
    )
}