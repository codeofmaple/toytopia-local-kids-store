import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const UserReview = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch("/userReviews.json")
            .then((res) => res.json())
            .then((data) => setUserData(data))
            .catch((error) => console.error("Failed to load user reviews:", error));
    }, []);

    return (
        <div className="">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-pink-600 mb-3">
                    What Our Users Say
                </h2>
                <p className="text-gray-500 mb-10">
                    Our  <span className='text-pink-500 font-semibold'>happy families </span>
                    love sharing their ToyTopia<span className='text-pink-500 font-semibold'> experiences!</span>
                </p>

                {/* cards */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    {userData.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white rounded-3xl shadow-md p-6 
                            hover:bg-linear-to-br from-pink-100  to-blue-50
                            hover:shadow-lg transition-all duration-300"
                        >
                            {/* img */}
                            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-pink-300">
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* name */}
                            <h3 className="text-lg font-bold text-gray-800 mt-3">
                                {user.name}
                            </h3>

                            {/* rating */}
                            <div className="flex justify-center mt-2">
                                {[...Array(user.rating)].map((_, index) => (
                                    <FaStar key={index} className="text-yellow-400 text-lg" />
                                ))}
                            </div>

                            {/* review details */}
                            <p className="text-gray-600 mt-4 leading-relaxed italic">
                                "{user.review}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserReview;
