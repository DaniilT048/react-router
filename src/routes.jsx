import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";


const routes = [
    {
        path: "home",
        element: <Home/>,
        label: "Home",
    },
    {
        path: "about",
        element: <About/>,
        label: "About",
    },
    {
        path: "contact",
        element: <Contact/>,
        label: "Contact",
    },
];

export default routes;