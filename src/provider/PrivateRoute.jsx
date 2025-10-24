import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import { ClipLoader, PacmanLoader } from "react-spinners";
import LoadingPage from "../pages/LoadingPage";

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();
    // console.log(location)

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
