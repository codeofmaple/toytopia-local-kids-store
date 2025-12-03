import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from '../pages/LoadingPage';

const HomeLayout = () => {
    const { state } = useNavigation();

    return (
        <div className='bg-pink-50'>
            <div className='min-h-screen flex flex-col relative'>
                <Navbar />

                <main className='flex-1 container mx-auto lg:px-0 px-4'>
                    {
                        state === "loading" ? <LoadingPage /> : <Outlet />
                    }
                </main>

                <Footer />
                <ToastContainer />
            </div>
        </div>
    );
};

export default HomeLayout;