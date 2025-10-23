import React from 'react';
import ToyCard from './ToyCard';

const AllToysCards = ({ toysData }) => {
    // console.log(toysData)

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-5 md:my-20 my-10'>
            {
                toysData.map((toy) => (
                    <ToyCard key={toy.toyId} toy={toy}></ToyCard>
                ))
            }
        </div>
    );
};

export default AllToysCards;