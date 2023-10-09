import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import AllJewellary from "../Pages/AllJewellary/AllJewellary";
import MyJewellary from "../Pages/MyJewellary/MyJewellary";
import AddJewellary from "../Pages/AddJewellary/AddJewellary";
import Blog from "../Pages/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/jewellarys?limit=5')
            },
            {
                path: '/jewellarys',
                element:<AllJewellary></AllJewellary>,
                loader: () => fetch('http://localhost:5000/jewellarys')
            },
            {
                path: 'myJewellary',
                element: <PrivateRoute>
                    <MyJewellary></MyJewellary>
                </PrivateRoute>
            },
            {
                path: 'addJewellary',
                element:<AddJewellary></AddJewellary>
            },
            {
                path: 'blog',
                element:<Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;