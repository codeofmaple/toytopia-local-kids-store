import React from "react";
import "./ToySpinner.css";

const ToySpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                src="https://i.ibb.co.com/zWJK0NKF/toy-spinner-1.png"
                alt="Loading..."
                className="toy-spinner drop-shadow-lg size-28"
            />
        </div>
    );
};

export default ToySpinner;

