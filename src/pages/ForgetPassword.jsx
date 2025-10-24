import React, { useContext } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import LoadingPage from "./LoadingPage";


const ForgetPassword = () => {
    const { forgetPassword, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleResetPassword = (e) => {
        e.preventDefault();

        const email = user ? user.email : e.target.email.value;

        forgetPassword(email)
            .then(() => {
                toast.success("Password reset link sent! Redirecting to Gmail...", { autoClose: 1250 })
                setTimeout(() => {
                    window.open("https://mail.google.com", "_blank");
                    navigate("/login");
                }, 2000);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to send password reset link. Please try again.");
            })
    };



    return (
        <div className="min-h-screen bg-linear-to-br from-yellow-50 via-pink-50 to-blue-50 flex justify-center items-center px-4 py-16">
            <div className="bg-white shadow-lg border-4 border-pink-200 rounded-3xl w-full max-w-md p-8 text-center hover:shadow-2xl transition-all duration-300">

                {/* icon */}
                <div className="text-pink-500 text-5xl mb-4 flex justify-center">
                    <FaEnvelopeOpenText />
                </div>

                <h2 className="text-3xl font-extrabold text-pink-600 mb-2">
                    Forgot Password?
                </h2>
                <p className="text-gray-600 mb-6">
                    Enter your registered email and we’ll send you a link to reset your password.
                </p>

                {/* forget form */}
                <form onSubmit={handleResetPassword} className="space-y-5">
                    <div className="text-left">
                        <label className="block font-semibold text-pink-600 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            defaultValue={user?.email || ""}
                            className="w-full border border-pink-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
                            readOnly={!!user}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 rounded-full shadow hover:bg-pink-600 transition-all duration-300"
                    >
                        Reset Password
                    </button>
                </form>

                <div className="mt-6">
                    <button
                        onClick={() => navigate("/login")}
                        className="text-pink-600 font-medium hover:underline"
                    >
                        ← Back to Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
