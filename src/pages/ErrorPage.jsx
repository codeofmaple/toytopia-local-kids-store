import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaHome } from "react-icons/fa";
import cryingBaby from "../assets/crying baba 02.png";
import LoadingPage from "./LoadingPage";

const ErrorPage = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 150)

        return () => clearInterval(timer);
    }, [])

    if (loading) {
        return <LoadingPage></LoadingPage>
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center
         bg-linear-to-br from-yellow-50 via-pink-50 to-blue-50 text-center p-2">
            <title>ToyTopia - Error-404</title>
            {/* img */}
            <img
                src={cryingBaby}
                alt="Crying baby"
                className="size-48 md:size-72 object-contain"
            />

            <h1 className="text-6xl font-extrabold text-pink-500 mt-5 drop-shadow-sm">
                Oops!
            </h1>
            <p className="text-lg text-gray-700 mt-3 font-medium">
                Looks like the toy ran away...
            </p>

            <h3 className="text-2xl font-medium text-gray-400 mt-5">Error 404</h3>
            <p className="text-gray-500 text-sm">
                The page you're looking for doesn't exist.
            </p>

            <button
                onClick={() => navigate("/")}
                className="mt-6 flex items-center gap-2 bg-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-600 transition-all duration-300"
            >
                <FaHome />
                Back to Home
            </button>
        </div>
    );
};

export default ErrorPage;
