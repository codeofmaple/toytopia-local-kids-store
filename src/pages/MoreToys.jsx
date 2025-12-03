import React from 'react';
import { useLoaderData } from 'react-router';
import AllToysCards from '../components/toys/AllToysCards';

const MoreToys = () => {

    const toysData = useLoaderData();

    return (
        <div className="min-h-screen">

            <title>ToyTopia | More Toys</title>

            {/* HERO SECTION */}
            <header className="py-20 px-6 bg-linear-to-r from-pink-500 to-pink-600 
                rounded-b-[55px] shadow-lg text-center text-white">

                <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-xl">
                    Discover More Toys ✨
                </h1>

                <p className="text-pink-100 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
                    ToyTopia is a vibrant and playful marketplace crafted to help families
                    discover joyful toys from trusted local sellers. Explore a world of imagination
                    and creativity — where every toy has a story, and every purchase supports
                    small businesses that bring happiness to children everywhere.
                </p>
            </header>

            {/* MAIN CONTENT */}
            <section
                className="mt-18"
            >
                <h2 className="text-4xl font-extrabold text-pink-600 text-center tracking-tight">
                    Explore Our Magical Collection 🎀
                </h2>

                <div className="lg:-mt-8  ">
                    <AllToysCards toysData={toysData} />
                </div>
            </section>

        </div>
    );
};

export default MoreToys;
