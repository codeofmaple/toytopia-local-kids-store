import React, { useContext } from 'react';
import { FaUserCircle } from "react-icons/fa";
import logo from '../assets/ToyTopia_logo_img.png';
import { AuthContext } from "../provider/AuthProvider";
import { toast } from 'react-toastify';
import { Link, NavLink, useNavigate } from 'react-router';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const navLinks = (
        <>
            <NavLink to="/" className="hover:text-pink-600">Home</NavLink>
            {user && <NavLink to="/profile" className="hover:text-pink-600">My Profile</NavLink>}
            {user && <NavLink to="/more-toys" className="hover:text-pink-600">More Toys</NavLink>}
        </>
    );

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success("Sign-out successful."))
            .catch((error) => toast.error(`Sign-out failed. ${error.code}`));
    };

    return (
        <nav className="bg-pink-200 sticky top-0 z-10 shadow-md">
            <div className="max-container md:px-0 px-4 py-3 flex items-center justify-between">
                {/* logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="ToyTopia Logo" className="w-10 h-10" />
                    <span className="text-2xl font-extrabold text-pink-600">ToyTopia</span>
                </Link>

                {/* nav links */}
                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    {navLinks}
                </ul>

                {/* user section */}
                <div className="flex items-center gap-3">
                    <div className="relative group cursor-pointer block">
                        {user && user.photoURL ? (
                            <img
                                onClick={() => navigate("./profile")}
                                className="size-8 rounded-full"
                                src={user.photoURL}
                                alt="user-photo"
                            />
                        ) : (
                            <FaUserCircle className="text-3xl size-8 text-gray-600 hover:text-pink-500 transition" />
                        )}

                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg text-sm p-3 right-0 mt-2 w-40">
                            <p className="font-semibold text-gray-700">
                                {user?.displayName || "Guest"}
                            </p>
                        </div>
                    </div>

                    {/* login/logout btn */}
                    {user ? (
                        <Link
                            to="/"
                            onClick={handleLogOut}
                            className="btn bg-pink-500 text-white px-6 rounded-lg text-sm hover:bg-pink-600 transition"
                        >
                            Logout
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="btn bg-pink-500 text-white px-6 rounded-lg text-sm hover:bg-pink-600 transition"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>

            {/* mobile nav */}
            <div className="md:hidden bg-pink-100 border-t border-pink-200 py-2 flex justify-center gap-4 text-sm">
                {navLinks}
            </div>
        </nav>
    );
};

export default Navbar;
