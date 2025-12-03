import React from "react";
import {
    IoHeart,
    IoLocationSharp,
    IoRocketSharp,
} from "react-icons/io5";
import {
    FaReact,
    FaCss3Alt,
    FaDatabase,
    FaSmile,
    FaHandsHelping,
    FaGlobeAmericas,
} from "react-icons/fa";
import logoImg from "../assets/ToyTopia_logo_img.png";

const AboutUs = () => {
    const FeatureCard = ({ icon: Icon, title, description }) => (
        <div className="backdrop-blur-md bg-white/70 shadow-xl p-8 rounded-3xl border border-white/40 hover:shadow-pink-300/50 hover:-translate-y-2 transition-all duration-300">
            <div className="flex justify-center mb-5">
                <Icon className="text-5xl text-pink-600 bg-pink-100 p-3 rounded-2xl shadow-md" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {title}
            </h3>
            <p className="text-gray-600 text-center">{description}</p>
        </div>
    );

    const TechIcon = ({ icon: Icon, name, color }) => (
        <div className="flex flex-col items-center gap-2 p-6 bg-white/80 backdrop-blur-lg rounded-2xl border border-white/40 shadow-md hover:shadow-xl transition-all hover:scale-105">
            <Icon className={`text-5xl text-${color}-600`} />
            <span className="text-gray-700 font-semibold text-sm">{name}</span>
        </div>
    );

    return (
        <div className="min-h-screen pt-16 pb-28 font-inter">

            {/* HERO SECTION */}
            <div className="max-w-6xl mx-auto px-5 text-center">
                <img
                    src={logoImg}
                    alt="ToyTopia Logo"
                    className="w-28 h-28 mx-auto mb-6 drop-shadow-xl animate-bounce"
                />

                <h1 className="text-5xl font-extrabold text-pink-600 tracking-tight mb-6">
                    Welcome to ToyTopia
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                    A modern marketplace where creativity, community, and joyful play come
                    together. At ToyTopia, we help families discover unique toys while
                    empowering local makers and small businesses.
                </p>
            </div>

            {/* HIGHLIGHT CARDS */}
            <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-10 mt-20">
                <div className="bg-white/70 backdrop-blur-lg shadow-lg p-8 rounded-3xl border border-white/40 hover:shadow-pink-200 hover:-translate-y-2 transition-all duration-300">
                    <FaSmile className="text-5xl text-pink-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 text-center">
                        Spreading Smiles
                    </h3>
                    <p className="text-gray-600 text-center">
                        We celebrate toys that inspire imagination, learning, and happy
                        childhood moments.
                    </p>
                </div>

                <div className="bg-white/70 backdrop-blur-lg shadow-lg p-8 rounded-3xl border border-white/40 hover:shadow-pink-200 hover:-translate-y-2 transition-all duration-300">
                    <FaHandsHelping className="text-5xl text-yellow-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 text-center">
                        Supporting Creators
                    </h3>
                    <p className="text-gray-600 text-center">
                        We give local toy makers a platform to showcase their passion and
                        connect with families everywhere.
                    </p>
                </div>

                <div className="bg-white/70 backdrop-blur-lg shadow-lg p-8 rounded-3xl border border-white/40 hover:shadow-pink-200 hover:-translate-y-2 transition-all duration-300">
                    <FaGlobeAmericas className="text-5xl text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 text-center">
                        A Global Vision
                    </h3>
                    <p className="text-gray-600 text-center">
                        We aim to build an international community where creativity has no
                        boundaries.
                    </p>
                </div>
            </div>

            {/* MISSION SECTION */}
            <div className="max-w-6xl mx-auto px-5 mt-28">
                <h2 className="text-4xl font-bold text-pink-600 text-center mb-10">
                    Our Core Mission
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    <FeatureCard
                        icon={IoLocationSharp}
                        title="Empower Local Makers"
                        description="We provide small sellers with a beautifully designed, modern storefront to showcase their creations."
                    />
                    <FeatureCard
                        icon={IoHeart}
                        title="Inspire Meaningful Play"
                        description="Our platform helps families find toys that spark creativity, curiosity, and joyful learning."
                    />
                    <FeatureCard
                        icon={IoRocketSharp}
                        title="Deliver a Next-Gen Experience"
                        description="With smooth navigation, secure routes, and a modern UI, ToyTopia makes toy shopping delightful."
                    />
                </div>
            </div>

            {/* SPECIAL FEATURES */}
            <div className="max-w-6xl mx-auto px-5 mt-28">
                <h2 className="text-4xl font-bold text-pink-600 text-center mb-10">
                    Why Families Love ToyTopia
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        [
                            "Secure Authentication",
                            "Safe and reliable sign-in powered by Firebase Auth."
                        ],
                        [
                            "Protected Routes",
                            "Private pages accessible only to authenticated users."
                        ],
                        [
                            "Modern UI/UX",
                            "Smooth animations, responsive layouts, and instant feedback."
                        ],
                        [
                            "Community Reviews",
                            "Helpful ratings and reviews guide families to the best choices."
                        ]
                    ].map(([title, desc]) => (
                        <div
                            key={title}
                            className="bg-white/80 backdrop-blur-lg p-7 rounded-2xl shadow-md border border-white/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                            <p className="text-gray-600 mt-2 text-sm">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* TECH STACK */}
            <div className="max-w-6xl mx-auto px-5 mt-28">
                <h2 className="text-4xl font-bold text-pink-600 text-center mb-8">
                    Our Technology Stack
                </h2>

                <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
                    We use a modern, dependable, and scalable tech stack to ensure ToyTopia
                    remains fast, secure, and enjoyable for every user.
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                    <TechIcon icon={FaReact} name="React" color="blue" />
                    <TechIcon icon={FaCss3Alt} name="TailwindCSS" color="teal" />
                    <TechIcon icon={FaDatabase} name="Firebase" color="yellow" />
                    <TechIcon icon={IoRocketSharp} name="React Router" color="red" />
                    <TechIcon icon={FaCss3Alt} name="DaisyUI" color="pink" />
                </div>
            </div>

            {/* FINAL CTA */}
            <div className="text-center max-w-4xl mx-auto mt-28">
                <h2 className="text-4xl font-extrabold text-pink-600 mb-4">
                    🎉 Join Us on This Playful Adventure!
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed">
                    Whether you're a parent searching for something special or a creator ready to
                    share your craftsmanship with the world — ToyTopia is your home for imagination.
                </p>

                <button className="mt-8 px-10 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-pink-300 transition-all duration-300 hover:scale-105">
                    Explore ToyTopia
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
