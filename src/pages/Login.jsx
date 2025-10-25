import React, { use } from 'react';
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import logo from '../assets/ToyTopia_logo_img.png'
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [emailForRePassword, setEmailForRePassword] = useState("");
    const { logIn, setUser, logInWithGoogle, auth } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({ email, password });

        // logIn firebase
        logIn(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                toast.success("logIn successful")
                navigate(`${location.state ? location.state : "/"}`)
                e.target.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                toast.error(`logIn failed! ${errorCode}`)
            });
    };

    const handleGoogleLogin = () => {
        logInWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Google login successful!");

                auth.currentUser?.reload().then(() => {
                    setUser(auth.currentUser);
                });
                navigate("/");
            }).catch((error) => {
                const errorMessage = error.message;
                toast.error(`Google login failed! ${errorMessage}`)
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-200 via-pink-100 to-yellow-100 p-4">
            <title>ToyTopia | Log-in</title>

            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
                {/* form name */}
                <div className="text-center mb-6">
                    <img src={logo} alt="ToyTopia Logo" className="w-16 h-16 mx-auto mb-2" />
                    <h1 className="text-3xl font-extrabold text-pink-600">Welcome Back!</h1>
                    <p className="text-gray-500 text-sm mt-1"> Log in to your ToyTopia account </p>
                </div>

                {/* login here */}
                <form onSubmit={handleLogin} className="space-y-5">
                    {/* email */}
                    <div>
                        <label className="block font-medium mb-1">Email Address</label>

                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2
                            focus-within:ring-2  focus-within:ring-pink-400">
                            <FaEnvelope className="text-pink-500 mr-2" />
                            <input
                                value={emailForRePassword}
                                onChange={(e) => setEmailForRePassword(e.target.value)}
                                type="email" name="email" placeholder="Enter your email address" className="w-full outline-none"
                                required />
                        </div>
                    </div>

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
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {/* forget password */}
                        <p className="text-sm mt-1 text-gray-500">Forgot your password
                            <Link
                                state={{ email: emailForRePassword }}
                                className="text-pink-500 hover:underline font-semibold"
                                to="/forget-password"> {" "}
                                Click here
                            </Link></p>
                    </div>

                    <button
                        type="submit"
                        className="w-full btn bg-pink-500 text-white py-2 rounded-lg transition active:scale-99 hover:bg-pink-600 font-bold"
                    >
                        Log In
                    </button>
                </form>

                {/* google */}
                <div className="mt-5">
                    <button onClick={handleGoogleLogin}
                        className="w-full border-2 border-gray-300 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer "
                    >
                        <FcGoogle className="text-xl"></FcGoogle>
                        <span className="font-medium text-gray-700">Continue with Google</span>
                    </button>
                </div>

                <p className="text-center text-gray-600 mt-5 text-sm flex justify-center gap-1">
                    Don't have an account?
                    <Link to="/register" className="text-pink-600 font-semibold hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
