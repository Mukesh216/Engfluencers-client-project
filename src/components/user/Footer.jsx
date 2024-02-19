import { useState } from "react";
import {
    FaWhatsapp,
    FaInstagram,
    FaTelegram,
    FaBlog,
    FaFacebook,
} from "react-icons/fa";

import { IoMdCall } from "react-icons/io";

const Footer = () => {


    const [showModel, setShowModel] = useState(false);

    const openModel = () => {
        setShowModel(true);
    }

    const closeModel = () => {
        setShowModel(false);
    }

    setTimeout(() => {
        setShowModel(false);
    }, 3000);


    

    return (
        <div className="py-4 bg-blue-950 w-full relative" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-10 md:gap-2 ">
                <div className="text-white mt-4 md:mt-8 md:mx-auto mx-12  order-last md:order-first">
                    <h1 className="text-lg  font-bold underline underline-offset-4">
                        USEFUL LINKS
                    </h1>
                    <ul className="mt-4">
                        <li className="text-md mb-2">suppoert@Sigmaxx.com</li>
                        <li className="text-md mb-2">Our Blog</li>
                        <li className="text-md mb-2 flex gap-2 items-center">Contact Us <IoMdCall /> :</li>
                        <li className="text-md ms-12 md:mx-6 ">
                            0421-1234567890
                        </li>
                        <li className="text-md ms-12 md:mx-6">
                            91 9876543210
                        </li>
                    </ul>
                </div>
                <div className="text-white text-center order-first  ">
                    <h1 className="text-2xl  font-bold tracking-widest ">
                        SIGMAXX <br /> ACADEMY
                    </h1>
                    <ul className="flex justify-center space-x-4 mt-8 pb-6  gap-4">
                        <li className="text-4xl text-orange-200">
                            <FaWhatsapp />
                        </li>
                        <li className="text-4xl text-orange-200">
                            <FaInstagram />
                        </li>
                        <li className="text-4xl text-orange-200">
                            <FaTelegram />
                        </li>
                        <li className="text-4xl text-orange-200">
                            <FaBlog />
                        </li>
                        <li className="text-4xl text-orange-200">
                            <FaFacebook />
                        </li>
                    </ul>
                    <hr className="w-3/4 md:w-full mx-auto border border-orange-500" />
                </div>
                <div className="text-white flex flex-col items-center md:mt-8 mx-auto md:order-last ">
                    <h1 className="text-lg font-bold underline underline-offset-4 mb-4">
                        USEFUL LINKS
                    </h1>
                    <div className="space-y-3 mt-2">
                        <div className="w-[160px]">
                            <button className="tracking-widest  border-2 border-orange-500 w-full px-6 py-2 hover:bg-white hover:text-black ">
                                EMAIL
                            </button>
                        </div>
                        <div className="w-[160px]">
                            <button className="tracking-widest  border-2 border-orange-500 w-full px-6 py-2  hover:bg-white hover:text-black">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p
                className="mt-12 text-center text-white w-full text- "
                style={{ fontFamily: "poppins" }}
            >
                Copyrights @ 2023, Sigmaxxacademy.com - Privacy | Terms of Service
            </p>

            <div className="h-2 w-2 bg-transparent bottom-4 cursor-pointer right-4 top-4 absolute "
                onClick={openModel}
            >

            </div>



            <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${showModel ? "block" : "hidden"}`}>

                <div className="bg-blue-950 animate__animated animate__fadeInUp w-full h-1/2 mx-2 sm:mx-4 md:mx-0 md:w-1/2 p-2 sm:p-4 md:p-8 rounded-lg">


                    <div className="w-full h-full border-2 bg-white border-blue-100 shadow-lg rounded-lg overflow-hidden">
                        <div className="w-full bg-sky-100 py-2 border-b-2 border-sky-500 flex justify-center items-center text-center font-bold text-lg md:text-xl">
                            <div className="w-full h-auto relative flex justify-center items-center">
                                <h1 className="tracking-wide" style={{ fontFamily: "poppins" }}>
                                    DEVELOPERS OF THIS WEBSITE
                                </h1>
                                <span className="absolute right-4 top-0 -translate-y-0">
                                <button className=" text-red-500 px-1
                                hover:text-red-700 transition duration-500 ease-in-out
                                
                                " onClick={closeModel}>
                                    X
                                </button>
                            </span>
                            </div>
                            
                        </div>


                        <div className="grid grid-cols-2 h-full relative">


                            <div className="flex flex-col items-center justify-center mb-20 text-center space-y-2">
                                <div className="w-28 h-28 sm:w-32 sm:h-32 border-2 mb-4 border-sky-500 shadow-md rounded-full overflow-hidden">
                                    <img
                                        src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1704203324/727721EUEC095_ts6lxv.jpg"
                                        alt="Profile Image"
                                        className="w-full h-full object-contain "
                                    />
                                </div>
                                <h2 className="mt-4 text-xl font-bold tracking-wider">S. MUKESH</h2>
                                <h3 className="text-gray-700 font-semibold">B.E - ECE  <span className="text-sm font-normal">(2021 - 2025)</span> </h3>
                                <p className="text-gray-600 text-sm my-2 font-semibold">SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</p>
                            </div>


                            <div className="flex flex-col items-center justify-center mb-20 text-center space-y-2">
                                <div className="w-28 h-28 sm:w-32 sm:h-32 border-2 mb-4 border-sky-500 shadow-md rounded-full overflow-hidden">
                                    <img
                                        src="https://res.cloudinary.com/dfsvudyfv/image/upload/v1704203323/727721EUEC113_owbfig.jpg"
                                        alt="Profile Image"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h2 className="mt-4 text-xl font-bold tracking-wider">K. PRAVEEN</h2>
                                <h3 className="text-gray-700 font-semibold">B.E - ECE <span className="text-sm font-normal">(2021 - 2025)</span> </h3>
                                <p className="text-gray-600 text-sm my-2 font-semibold">SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY</p>
                            </div>

                            <div className="absolute h-52 md:h-72 bg-blue-400 w-1
                        left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer;
