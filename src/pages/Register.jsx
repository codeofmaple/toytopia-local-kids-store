import React from 'react';
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaImage, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import logo from '../assets/ToyTopia_logo_img.png'
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;

        // password errors rules
        if (!/(?=.*[A-Z])/.test(password)) {
            return setError("Password must contain at least one uppercase letter.");
        }
        if (!/(?=.*[a-z])/.test(password)) {
            return setError("Password must contain at least one lowercase letter.");
        }
        if (password.length < 6) {
            return setError("Password must be at least 6 characters long.");
        }

        setError("");
        console.log({ name, email, photoURL, password });
        // firebase authentication
    };

    const handleGoogleRegister = () => {
        console.log("google google clicked");
        // google authentication
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-200 via-pink-100 to-yellow-100 p-4">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
                {/* form title and img */}
                <div className="text-center mb-6">
                    <img src={logo} alt="ToyTopia Logo" className="w-16 h-16 mx-auto mb-2"
                    />
                    <h1 className="text-3xl font-extrabold text-pink-600">Create Account</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Join ToyTopia to explore more toys!
                    </p>
                </div>

                {/* register input field */}
                <form onSubmit={handleRegister} className="space-y-5">
                    {/* name */}
                    <div>
                        <label className="block  font-medium mb-1">
                            Full Name
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-pink-400">
                            <FaUser className="text-pink-500 mr-2" />
                            <input type="text" name="name" placeholder="Your Name" className="w-full outline-none" required
                            />
                        </div>
                    </div>

                    {/* email */}
                    <div>
                        <label className="block  font-medium mb-1">
                            Email Address
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-pink-400">
                            <FaEnvelope className="text-pink-500 mr-2" />
                            <input
                                type="email" name="email" placeholder="Enter your email address" className="w-full outline-none" required />
                        </div>
                    </div>

                    {/* img url */}
                    <div>
                        <label className="block  font-medium mb-1">
                            Photo URL
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-pink-400">
                            <FaImage className="text-pink-500 mr-2" />
                            <input type="text" name="photoURL" placeholder="Provide your photoURL" className="w-full outline-none"
                            />
                        </div>
                    </div>

                    {/* password */}
                    <div>
                        <label className="block  font-medium mb-1">
                            Password
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-pink-400 relative">
                            <FaLock className="text-pink-500 mr-2" />
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="w-full outline-none" required
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 text-gray-500 hover:text-pink-500">
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                    </div>

                    {/* error */}
                    {error && (
                        <div className=" text-red-800 text-sm -mt-4">
                            {error}
                        </div>
                    )}

                    <button type="submit" className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition">
                        Register
                    </button>
                </form>

                {/* google */}
                <div className="mt-5">
                    <button
                        onClick={handleGoogleRegister}
                        className="w-full border-2 border-gray-300 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        <FcGoogle className="text-xl"></FcGoogle>
                        <span className="font-medium ">Sign up with Google</span>
                    </button>
                </div>

                <p className="text-center text-gray-600 mt-5 text-sm flex justify-center gap-1">
                    Already have an account?

                    <Link to="/login" className="text-pink-600 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
