import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [

                {
                    path: "/",
                    element: <Home></Home>
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
                    path: "/toy-details",
                    element: <p>Toy Details layout</p>
                },
                {
                    path: "/profile",
                    element: <p>This is profile layout</p>
                },
                {
                    path: "/more-toys",
                    element: <p>This is more toys</p>
                },
                {
                    path: "/about",
                    element: <p>This is about</p>
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