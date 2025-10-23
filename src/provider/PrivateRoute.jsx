import React, { use, useEffect, useRef } from "react";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
    const { user } = use(AuthContext);
    const hasShownToast = useRef(false);

    useEffect(() => {
        if ((!user || !user.email) && !hasShownToast.current) {
            toast.error("You must be logged in to access this page");
            hasShownToast.current = true;
        }
    }, [user]);

    if (user && user.email) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
};

export default PrivateRoute;
