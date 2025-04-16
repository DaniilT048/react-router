import './App.css'
import routes from "./routes.jsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout />,
        children:[
            ...routes,
        ]
    }
])

const App = () => <RouterProvider router={router} />;

export default App
