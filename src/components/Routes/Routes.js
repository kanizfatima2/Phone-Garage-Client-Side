import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Home from '../Home Page/Home';
import Blogs from '../Blogs/Blogs';
import ErrorPage from "../Shared/ErrorPage";
import AllPhones from "../AllPhones/AllPhones";
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';
import PrivateRoute from './PrivateRoute';

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
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/allPhones/:id',
                element: <AllPhones></AllPhones>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    }
])