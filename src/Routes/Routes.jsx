import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
           
        ]
    }
])

export default router;