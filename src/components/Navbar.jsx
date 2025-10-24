import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from '../assets/ToyTopia_logo_img.png'
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const navLinks = (
        <>
            <NavLink to="/" className="hover:text-pink-600">Home</NavLink>
            {
                user ? <NavLink to="/profile" className="hover:text-pink-600">Profile</NavLink> : " "
            }
            {
                user ? <NavLink to="/more-toys" className="hover:text-pink-600">More Toys</NavLink> : " "
            }
        </>
    );

    const handleLogOut = () => {
        logOut().then(() => {
            toast.success("Sign-out successful.")

        }).catch((error) => {
            const errorCode = error.code;
            toast.error(`Sign-out failed. ${errorCode}`)
        });
    }

    return (
        <nav className="bg-linear-to-r from-pink-200 via-100% via-blue-100 to-amber-50 shadow-md   ">
            <div className="max-container px-4 py-3 flex items-center justify-between">
                {/* left name/logo*/}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="ToyTopia Logo" className="w-10 h-10" />
                    <span className="text-2xl font-extrabold text-pink-600">ToyTopia</span>
                </Link>

                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    {navLinks}
                </ul>

                <div className="flex items-center gap-3">
                    <div className="relative group cursor-pointer block">
                        {/* <FaUserCircle className="text-3xl text-gray-600 hover:text-pink-500 transition" /> */}

                        {
                            user && user.photoURL ? <img className='size-8 rounded-full' src={user.photoURL} alt="user-photo" /> : <FaUserCircle className="text-3xl size-8 text-gray-600 hover:text-pink-500 transition" />
                        }

                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg text-sm p-3 right-0 mt-2 w-40">
                            <p className="font-semibold text-gray-700">{user && user.displayName ? user.displayName : "Guest"} </p>
                        </div>
                    </div>


                    {/* right logout btn*/}
                    {user ?
                        <Link
                            to="/"
                            onClick={handleLogOut}
                            className="btn  bg-pink-500 text-white px-6 rounded-lg text-sm hover:bg-pink-600 transition">
                            Logout
                        </Link>
                        :
                        <Link
                            to="/login"
                            className="btn  bg-pink-500 text-white px-6 rounded-lg text-sm hover:bg-pink-600 transition">
                            Login
                        </Link>
                    }

                </div>
            </div>

            {/* nav-links for smartphone */}
            <div className="md:hidden bg-pink-50 border-t border-pink-200 py-2 flex justify-center gap-4 text-sm">
                {navLinks}
            </div>
        </nav>
    );
};

export default Navbar;
