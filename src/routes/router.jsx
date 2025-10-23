import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ToyDetails from "../pages/ToyDetails";
import MoreToys from "../pages/MoreToys";
import About from "../pages/About";

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
                    loader: () => fetch("/toysdata.json")
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
                    path: "/profile",
                    element: <p>This is profile layout</p>
                },
                {
                    path: "/more-toys",
                    element: <MoreToys></MoreToys>,
                    loader: () => fetch("/toysdata.json")
                },
                {
                    path: "/about",
                    element: <About></About>
                },
                {
                    path: "/toy-details/:id",
                    element: <ToyDetails></ToyDetails>,
                    loader: () => fetch("/toysdata.json")
                },
                {
                    path: "/*",
                    element: <p>404 - error 2</p>
                },
            ]
        },
        {
            path: "/*",
            element: <p>404 - error</p>
        },
    ]
)

export default router;