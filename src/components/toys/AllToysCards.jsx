import React from 'react';
import ToyCard from './ToyCard';

const AllToysCards = ({ toysData }) => {

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 md:py-20 py-10 lg:mx-0 md:mx-[2.66%] mx-0'>
            {
                toysData.map((toy) => (
                    <ToyCard key={toy.toyId} toy={toy}></ToyCard>
                ))
            }
        </div>
    );
};

export default AllToysCards;