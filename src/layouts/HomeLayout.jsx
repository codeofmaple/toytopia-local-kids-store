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
        <div className='min-h-screen flex flex-col'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-1 '>
                {
                    state == "loading" ? <LoadingPage></LoadingPage> : <Outlet></Outlet>
                }
            </main>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default HomeLayout;