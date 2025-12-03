import React, { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/ToyTopia_logo_img.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success("Signed out successfully."))
            .catch((error) => toast.error(`Sign-out failed: ${error.code}`));
    };

    const linkClass =
        "transition text-gray-700 hover:text-pink-600 tracking-wide font-medium text-lg";

    const navLinks = (
        <>
            <NavLink onClick={() => setMenuOpen(false)} className={linkClass} to="/">Home</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} className={linkClass} to="/more-toys">More Toys</NavLink>
            {user && (
                <NavLink onClick={() => setMenuOpen(false)} className={linkClass} to="/profile">My Profile</NavLink>
            )}
            <NavLink onClick={() => setMenuOpen(false)} className={linkClass} to="/about">About</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} className={linkClass} to="/support">Support</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} className={linkClass} to="/contact">Contact</NavLink>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 bg-pink-200 shadow-sm">
            <div className="max-container px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="ToyTopia Logo" className="w-10 h-10 drop-shadow-sm" />
                    <span className="text-2xl font-extrabold text-pink-600 tracking-wide">
                        ToyTopia
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex gap-10 items-center">{navLinks}</ul>

                {/* Desktop User / Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    {user && (
                        <div className="relative group cursor-pointer">
                            {user.photoURL ? (
                                <img
                                    onClick={() => navigate("/profile")}
                                    className="size-9 rounded-full border-2 border-pink-300 shadow-sm"
                                    src={user.photoURL}
                                    alt="user"
                                />
                            ) : (
                                <FaUserCircle className="text-4xl text-gray-500 hover:text-pink-600 transition" />
                            )}

                            {/* Tooltip */}
                            <div className="absolute right-0 mt-2 bg-white shadow-xl text-sm p-3 rounded-xl w-44 opacity-0 
                                group-hover:opacity-100 transition-all border border-pink-100 backdrop-blur-xl">
                                <p className="font-semibold text-gray-700">{user?.displayName || "Guest"}</p>
                            </div>
                        </div>
                    )}

                    {user ? (
                        <button
                            onClick={handleLogOut}
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white 
                                text-sm font-semibold shadow-md hover:from-pink-500 hover:to-pink-600 transition"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white 
                                text-sm font-semibold shadow-md hover:from-pink-500 hover:to-pink-600 transition"
                        >
                            Login
                        </Link>
                    )}
                </div>

                {/* Hamburger */}
                <button
                    className="lg:hidden text-3xl text-pink-600 hover:text-pink-700 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* ABSOLUTE FLOATING MENU */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full z-40 p-4">
                    <div
                        className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-pink-200/40 
                        py-8 px-6 flex flex-col items-center gap-6 animate-fadeIn"
                    >
                        {navLinks}

                        {/* Mobile User */}
                        <div className="flex flex-col items-center gap-3 pt-3 w-full">
                            {user ? (
                                <>
                                    {user.photoURL ? (
                                        <img
                                            onClick={() => navigate("/profile")}
                                            className="size-9 rounded-full border-2 border-pink-300 shadow-sm"
                                            src={user.photoURL}
                                            alt="user"
                                        />
                                    ) : (
                                        <FaUserCircle className="text-4xl text-gray-500 hover:text-pink-600 transition" />
                                    )}
                                    <p className="font-semibold text-gray-700">{user.displayName}</p>

                                    <button
                                        onClick={handleLogOut}
                                        className="px-8 py-2 w-full rounded-lg bg-gradient-to-r from-pink-400 to-pink-500 
                                            text-white font-semibold shadow-md hover:from-pink-500 hover:to-pink-600 transition"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    onClick={() => setMenuOpen(false)}
                                    className="px-8 py-2 w-full rounded-lg bg-gradient-to-r from-pink-400 to-pink-500 
                                        text-white font-semibold shadow-md hover:from-pink-500 hover:to-pink-600 transition"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
