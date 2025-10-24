import React from 'react';
import { useLoaderData } from 'react-router';
import AllToysCards from '../components/toys/AllToysCards';

const MoreToys = () => {
    const toysData = useLoaderData()
    return (
        <div>
            <title>ToyTopia | More Toys</title>

            <section className='popular-section max-container  md:w-full w-11/12'>
                <AllToysCards toysData={toysData}></AllToysCards>
            </section>
        </div>
    );
};

export default MoreToys;