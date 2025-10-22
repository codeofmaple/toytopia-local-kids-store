import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from '../assets/ToyTopia_logo_img.png'
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const navLinks = (
        <>
            <NavLink to="/" className="hover:text-pink-600">Home</NavLink>
            <NavLink to="/profile" className="hover:text-pink-600">Profile</NavLink>
            <NavLink to="/more-toys" className="hover:text-pink-600">More Toys</NavLink>
            <NavLink to="/about" className="hover:text-pink-600">About</NavLink>
        </>
    );
    const { user, logOut } = use(AuthContext);
    console.log(user)

    const handleLogOut = () => {
        logOut().then(() => {
            console.log("Sign-out successful.")
        }).catch((error) => {
            console.log(error)
        });
        console.log("user trying to log-out")
    }

    return (
        <nav className="bg-linear-to-r from-blue-200 via-pink-100 to-yellow-100 shadow-md sticky top-0 z-50">
            <div className="max-container px-4 py-3 flex items-center justify-between">
                {/* left section:  the logo and website name*/}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="ToyTopia Logo" className="w-10 h-10" />
                    <span className="text-2xl font-extrabold text-pink-600">ToyTopia</span>
                </Link>

                {/* middle section : the tabs */}
                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    {navLinks}
                </ul>

                {/* right section: user-img and login - logout */}
                <div className="flex items-center gap-3">
                    <div className="relative group cursor-pointer block">
                        <FaUserCircle className="text-3xl text-gray-600 hover:text-pink-500 transition" />
                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg text-sm p-3 right-0 mt-2 w-40">
                            {/* need to add name here */}
                            <p className="font-semibold text-gray-700">{user && user.email ? user.email : "Guest"} </p>
                        </div>
                    </div>



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

            {/* navlinks for smartphone */}
            <div className="md:hidden bg-pink-50 border-t border-pink-200 py-2 flex justify-center gap-4 text-sm">
                {navLinks}
            </div>
        </nav>
    );
};

export default Navbar;
