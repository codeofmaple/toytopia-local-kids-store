import React from 'react';
import ToySpinner from '../components/toySpinner/ToySpinner';


const LoadingPage = () => {
    return (
        <div className="flex-1 flex items-center justify-center min-h-[60vh]">
            <ToySpinner></ToySpinner>
        </div>
    );
};

export default LoadingPage;