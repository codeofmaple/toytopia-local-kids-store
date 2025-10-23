import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
    const { toyId, toyName, price, rating, availableQuantity, pictureURL } = toy;

    return (
        <div className=" rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5 border border-pink-100 p-4 bg-linear-to-b from-blue-100 to-pink-100 ">
            {/* img */}
            <div className="relative w-full overflow-hidden h-80">
                <img
                    src={pictureURL}
                    alt={toyName}
                    className="object-fill w-full h-full rounded-xl"
                />
                <span className="absolute top-2 font-bold right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
                    {availableQuantity} in stock
                </span>
            </div>

            {/* name */}
            <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-pink-600">{toyName}</h3>

                <div className="flex justify-between w-4/12 mx-auto mt-2 gap-4">
                    {/* price */}
                    <p className="font-semibold text-2xl text-blue-500">
                        ${price}
                    </p>

                    {/* rating */}
                    <div className="flex justify-center items-center text-yellow-400">
                        <FaStar className="mr-1" />
                        <span className=" text-black  font-medium">{rating}</span>
                    </div>

                </div>

                {/* btn */}
                <Link
                    to={`/toy-details/${toyId}`}
                    className="block mt-3 bg-pink-600  text-white py-2.5 rounded-xl text-sm  hover:bg-pink-500 transition-all duration-200 active:scale-95 font-bold "
                >
                    View More
                </Link>
            </div>
        </div>
    );
};

export default ToyCard;
