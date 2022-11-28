import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Home from '../Home Page/Home';
import Blogs from '../Blogs/Blogs';
import ErrorPage from "../Shared/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>, errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    }
])