import React from "react";
import { FaSmile, FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";
import logoImg from '../assets/ToyTopia_logo_img.png'

const About = () => {
    return (
        <div className=" px-6 md:px-16">
            <div className="max-w-5xl mx-auto text-center">
                {/* title and img */}
                <h1 className="text-4xl font-extrabold text-pink-600 mb-4 flex flex-col justify-center items-center gap-2">
                    <img src={logoImg} alt="" className="size-20" />
                    About ToyTopia
                </h1>
                <p className="text-gray-700 text-lg md:w-3/4 mx-auto">
                    Welcome to <span className="font-semibold text-pink-500">ToyTopia</span> —
                    a magical online marketplace where families can discover, explore, and support
                    <span className="font-semibold text-pink-500"> local toy sellers</span>.
                    We bring joy, imagination, and connection together under one roof,
                    helping every child find their next favorite toy while supporting small businesses.
                </p>
            </div>

            {/* banner cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
                {/* card */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:bg-amber-100">
                    <FaSmile className="text-5xl text-pink-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Spreading Smiles</h3>
                    <p className="text-gray-600">
                        Our mission is to fill every home with laughter and creativity through
                        toys that inspire imagination and learning.
                    </p>
                </div>

                {/* card */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:bg-amber-100">
                    <FaHandsHelping className="text-5xl text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Empowering Locals</h3>
                    <p className="text-gray-600">
                        We connect families with talented local toy makers, helping them grow
                        their businesses and share their creations with the world.
                    </p>
                </div>

                {/* card */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition hover:bg-amber-100">
                    <FaGlobeAmericas className="text-5xl text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">A Global Dream</h3>
                    <p className="text-gray-600">
                        Our vision is to make ToyTopia a global community where play,
                        learning, and creativity have no boundaries.
                    </p>
                </div>
            </div>

            {/* msg */}
            <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold text-pink-600 mb-3">
                    🚀 Join Our Playful Journey!
                </h2>
                <p className="text-gray-700 md:w-2/3 mx-auto">
                    Whether you're a parent looking for the perfect toy or a small seller
                    ready to share your creations — ToyTopia is where imagination meets opportunity.
                    Together, let's build a happier, more playful world!
                </p>
            </div>
        </div>
    );
};

export default About;
