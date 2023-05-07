
import {createBrowserRouter}  from 'react-router-dom'
import { Layout } from '../components/Block/Layout'
import { LandingPage } from '../Pages/LandingPage'

export const mainRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <LandingPage/>,
                index: true
            }
        ]
    }
])