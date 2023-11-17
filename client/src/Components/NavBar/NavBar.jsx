import React from "react";
import Logo from '../../Assets/Images/scan-logo.png'
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


const NavBar = () => {

    const handleLogin = () => {
        Swal.fire({
            icon: 'info',
            title: 'Working on it!',
            text: 'This feature is not available',
        });
    };


    return (
        <div>
            <nav className="bg-white bg-opacity-75 rounded-full  ml-10 mr-10 mt-6 border-gray-200 shadow-md mb-5">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link className="flex items-center">
                        <img src={Logo} className="h-8 mr-3" alt="logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                            AadhaarScan
                        </span>
                    </Link>
                    <div className="flex md:order-2">
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition w-full md:w-auto"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar