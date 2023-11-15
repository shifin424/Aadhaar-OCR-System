import React from "react";
import Logo from '../../Assets/Images/scan-logo.png'


const NavBar = () => {
    return (
        <div>
            <nav className="bg-white bg-opacity-75 rounded-full  ml-10 mr-10 mt-6 border-gray-200 shadow-md mb-5">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                            AadhaarScan
                        </span>
                    </a>
                    <div className="flex md:order-2">
                        {/* {userToken ? (
                            <Dropdown overlay={avatarMenu} trigger={["click"]}>
                                <img className="w-10 h-10" src={avatar} alt="" />
                            </Dropdown>
                        ) : ( */}
              <button
                            type="button"
                            // onClick={handleNavigate}
                            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition w-full md:w-auto"
                        >
                            Login
                        </button>
                        {/* )} */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar