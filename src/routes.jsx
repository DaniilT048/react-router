import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";


const routes = [
    {
        path: "",
        element: <Home />,
        label: "Home",
    },
    {
        path: "about",
        element: <About />,
        label: "Home",
    },
    {
        path: "contact",
        element: <Contact />,
        label: "Home",
    },
];

export default routes;