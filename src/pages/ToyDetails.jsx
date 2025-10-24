import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import ErrorPage from "./ErrorPage";

const ToyDetails = () => {
    const toysData = useLoaderData();
    const { id } = useParams();
    // console.log(id)
    const toy = toysData.find((toy) => toy.toyId == id);


    const [formData, setFormData] = useState({ name: "", email: "" });

    if (!toy) {
        return (
            <ErrorPage></ErrorPage>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            toast.error("Please fill in all fields!");
            return;
        }
        toast.success(`Thank you, ${formData.name}! You’ve trying the ${toy.toyName}.`);
        setFormData({ name: "", email: "" });
    };

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-linear-to-br from-yellow-50 via-pink-50 to-blue-50 rounded-3xl shadow-lg">
            {/* img */}
            <div className="w-full h-92 rounded-2xl">
                <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="w-full h-full object-contain rounded-xl"
                />
            </div>

            {/* toy details */}
            <div className="mt-6">
                <h2 className="text-3xl font-bold text-pink-600">{toy.toyName}</h2>
                <p className="text-gray-700 mt-2">{toy.description}</p>

                <div className="flex flex-wrap justify-between items-center mt-4">
                    <p className="font-semibold text-lg text-gray-800">
                        Price: <span className="text-pink-600">${toy.price.toFixed(2)}</span>
                    </p>
                    <p className="font-semibold text-gray-800">
                        Category: <span className="text-pink-600">{toy.subCategory}</span>
                    </p>
                    <p className="flex items-center font-semibold text-gray-800">
                        <FaStar className="text-yellow-400 ml-1 mr-2" /> {toy.rating}
                    </p>
                    <p className="font-semibold text-gray-800">
                        Quantity: <span className="text-pink-600">{toy.availableQuantity}</span>
                    </p>
                </div>

                <div className="mt-6 border-t border-gray-300 pt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Seller Information</h3>
                    <p className="text-gray-700 mt-1">👨🏻‍💼 {toy.sellerName}</p>
                    <p className="text-gray-700">✉ {toy.sellerEmail}</p>
                </div>

                {/* try now form */}
                <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-bold text-pink-600 mb-4">Try This Toy!</h3>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 active:scale-99 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-500 transition-all"
                        >
                            Try Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
