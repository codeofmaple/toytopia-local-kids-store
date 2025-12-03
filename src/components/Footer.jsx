import React from 'react';
import logo from '../assets/ToyTopia_logo_img.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-pink-200  text-gray-800">
            <div className="max-container py-10  lg:px-0 px-4
            grid grid-cols-1 md:grid-cols-4 place-items-center gap-8">
                {/* website info */}
                <div className='text-center md:text-start'>
                    {/* <h2 className="text-2xl font-extrabold text-pink-600 mb-3">ToyTopia</h2> */}

                    <span className="flex items-center gap-2 mb-3 lg:-mt-8 justify-center lg:justify-start ">
                        <img src={logo} alt="ToyTopia Logo" className="w-10 h-10" />
                        <span className="text-2xl font-extrabold text-pink-600">ToyTopia</span>
                    </span>

                    <p className="text-sm text-gray-600">
                        A vibrant marketplace helping families discover and support local toy sellers. <br />
                        Fun, safe, and creative — all in one place!
                    </p>
                </div>

                {/* related links */}
                <div className='text-center md:text-start'>
                    <h3 className="text-lg font-semibold text-pink-600 mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/" className="hover:text-pink-600">Home</a></li>
                        <li><a href="/profile" className="hover:text-pink-600">My Profile</a></li>
                        <li><a href="/more-toys" className="hover:text-pink-600">More Toys</a></li>
                        <li><a href="/login" className="hover:text-pink-600">Login</a></li>
                    </ul>
                </div>

                {/* policies and term-conditions */}
                <div className='text-center md:text-start'>
                    <h3 className="text-lg font-semibold text-pink-600 mb-2">Policies</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-pink-600">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-pink-600">Return Policy</a></li>
                        <li><a href="#" className="hover:text-pink-600">FAQs</a></li>
                    </ul>
                </div>

                {/* social links */}
                <div className='text-center md:text-start'>
                    <h3 className="text-lg font-semibold text-pink-600 mb-2">Follow Us</h3>
                    <div className="flex md:justify-normal justify-center gap-4 text-2xl">
                        <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
                        <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="#" className="hover:text-sky-500"><FaTwitter /></a>
                        <a href="#" className="hover:text-red-500"><FaYoutube /></a>
                    </div>
                    <p className="text-sm mt-3 text-gray-600">
                        Stay updated with our latest toy trends!
                    </p>
                </div>
            </div>

            <div className="bg-linear-to-r from-pink-100 via-blue-100  to-pink-200 text-center py-4 text-sm border-t border-pink-200">
                © 2025 <span className="font-bold text-pink-600">ToyTopia</span> | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
