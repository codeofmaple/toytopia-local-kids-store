import React from "react";
import "./ToySpinner.css";

const ToySpinner = ({ size = 100 }) => {
    return (
        <div>
            <img
                src="https://i.ibb.co.com/zWJK0NKF/toy-spinner-1.png"
                alt="Loading..."
                className="toy-spinner"
                style={{ width: size, height: size }}
            />
        </div>
    );
};

export default ToySpinner;
