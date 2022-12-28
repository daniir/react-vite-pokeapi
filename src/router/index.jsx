import { createBrowserRouter } from 'react-router-dom'
import Detail, { LoaderDetail } from '../pages/detail';
import Favorites from '../pages/favorites';
import Home from '../pages/home';
import Layout from '../pages/layout/layout';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail/:id",
                element: <Detail />,
                loader: LoaderDetail,
            },
            {
                path: "favorites",
                element: <Favorites />
            }
        ]
    },
]);