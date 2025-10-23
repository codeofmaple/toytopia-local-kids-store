import React, { use, useEffect, useRef } from "react";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import { Navigate, useLocation } from "react-router";
import { ClipLoader, PacmanLoader } from "react-spinners";
import LoadingPage from "../pages/LoadingPage";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const hasShownToast = useRef(false);

    const location = useLocation();
    console.log(location)

    useEffect(() => {
        if ((!user || !user.email) && !hasShownToast.current) {
            toast.error("You must be logged in to access this page");
            hasShownToast.current = true;
        }
    }, [user]);

    if (loading) {
        return <LoadingPage></LoadingPage>
    }
    if (user && user.email) {
        return children;
    } else {
        return <Navigate state={location.pathname} to="/login" />;
    }
};

export default PrivateRoute;
