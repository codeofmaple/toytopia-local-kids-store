import React from 'react';
import { useLoaderData } from 'react-router';
import Slider from '../components/slider/Slider';
import ToysCards from '../components/toys/ToysCards';
import About from '../components/About';
import SliderInfo from '../components/SliderInfo';
import UserReview from '../components/UserReview';

const Home = () => {

    const toysData = useLoaderData()
    // console.log(toysData)

    return (
        <div className='bg-pink-50 pb-20 py-10 md:space-y-20 space-y-10'>
            {/* slider section */}
            <section className='banner '>
                <SliderInfo></SliderInfo>
                <Slider></Slider>
            </section>
            {/* popular toys section */}
            <section className='popular-section'>
                <ToysCards toysData={toysData}></ToysCards>
            </section>
            {/* 2 extra section */}
            <section>
                <UserReview></UserReview>
            </section>
            <section>
                <About></About>
            </section>

        </div>
    );
};

export default Home;