import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ToyDetails from "../pages/ToyDetails";
import MoreToys from "../pages/MoreToys";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../pages/Profile";
import ForgetPassword from "../pages/ForgetPassword";
import ErrorPage from "../pages/ErrorPage";
import LoadingPage from "../pages/LoadingPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [

                {
                    index: true,
                    path: "/",
                    element: <Home></Home>,
                    loader: () => fetch("/toysdata.json"),
                    hydrateFallbackElement: <LoadingPage></LoadingPage>
                },
                {
                    path: "/profile",
                    element: <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
                },
                {
                    path: "/more-toys",
                    element: <MoreToys></MoreToys>,
                    loader: () => fetch("/toysdata.json"),
                    hydrateFallbackElement: <LoadingPage></LoadingPage>
                },
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/register",
                    element: <Register></Register>
                },
                {
                    path: "/forget-password",
                    element: <ForgetPassword></ForgetPassword>
                },
                {
                    path: "/toy-details/:id",
                    element: <PrivateRoute>
                        <ToyDetails></ToyDetails>
                    </PrivateRoute>,
                    loader: () => fetch("/toysdata.json"),
                    hydrateFallbackElement: <LoadingPage></LoadingPage>
                },
                // {
                //     path: "/*",
                //     element: <ErrorPage></ErrorPage>
                // },
            ]
        },
        {
            path: "/*",
            element: <ErrorPage></ErrorPage>
        },
    ]
)

export default router;