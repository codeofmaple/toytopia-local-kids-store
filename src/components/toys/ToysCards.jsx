import React from 'react';
import ToyCard from './ToyCard';
import { Link } from 'react-router';

const ToysCards = ({ toysData }) => {

    return (
        <div>
            <div className=" mb-6 flex flex-col justify-center items-center gap-2">

                <h1 className='text-4xl font-extrabold text-pink-600'>Popular Toys</h1>
                <p className='text-gray-500'>Our <span className='text-pink-500 font-semibold'>Most-Loved Toys</span> of the Season</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 md:max-w-7xl mx-auto max-w-11/12'>
                {
                    toysData.slice(0, 9).map((toy) => (
                        <ToyCard key={toy.toyId} toy={toy}></ToyCard>
                    ))
                }
            </div>


            {/* btn */}
            <Link
                to={`/more-toys`}
                className="block btn-primary mt-8 py-4 md:max-w-2xl max-w-11/12 bg-pink-600 mx-auto text-center 
                bg-linear-to-r from-blue-500  via-pink-600 to-pink-600 hover:scale-102
                  text-white rounded-xl text-xl  shadow-lg
                   hover:bg-pink-500 transition-all duration-200 active:scale-95 font-bold "
            >
                Explore More Toys
            </Link>
        </div>
    );
};

export default ToysCards;