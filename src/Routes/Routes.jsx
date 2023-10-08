import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import AllJewellary from "../Pages/AllJewellary/AllJewellary";
import MyJewellary from "../Pages/MyJewellary/MyJewellary";
import AddJewellary from "../Pages/AddJewellary/AddJewellary";
import Blog from "../Pages/Blog/Blog";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/jewellarys',
                element:<AllJewellary></AllJewellary>,
                loader: () => fetch('http://localhost:5000/jewellarys')
            },
            {
                path: 'myJewellary',
                element:<MyJewellary></MyJewellary>
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