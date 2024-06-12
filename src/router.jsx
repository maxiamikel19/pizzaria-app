import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout'
import AuthLayout from './layouts/AuthLayout'
import Login from './views/Login'
import Home from './views/Home'
import Register from './views/Register'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                index: true,
                element: <Home />
            },
           
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children:[
            {
                index: true,
                path: '/auth/login',
                element: <Login />
            },
            {
                index: true,
                path: '/auth/register',
                element: <Register />
            }
        ]
    }
])

export default router