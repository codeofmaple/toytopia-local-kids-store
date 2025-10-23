import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomeLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>

            <ToastContainer />
        </div>
    );
};

export default HomeLayout;