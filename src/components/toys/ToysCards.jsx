import React from 'react';
import ToyCard from './ToyCard';

const ToysCards = ({ toysData }) => {
    // console.log(toysData)

    return (
        <div>
            <div className=" mb-6 flex flex-col justify-center items-center gap-2">

                <h1 className='text-4xl font-extrabold text-pink-600'>Popular Toys</h1>
                <p className='text-gray-500'>Our <span className='text-pink-500 font-semibold'>Most-Loved Toys</span> of the Season</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 max-w-7xl mx-auto'>
                {
                    toysData.slice(0, 9).map((toy) => (
                        <ToyCard key={toy.toyId} toy={toy}></ToyCard>
                    ))
                }
            </div>
        </div>
    );
};

export default ToysCards;