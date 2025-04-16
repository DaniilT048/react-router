import './App.css'
import routes from "./routes.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children:[
            ...routes,
            {
                path: "*",
                element: <NotFound/>,
                label: "Not Found"
            }
        ]
    }
])

const App = () => <RouterProvider router={router} />;

export default App
