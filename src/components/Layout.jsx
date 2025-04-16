import HeaderMenu from "./HeaderMenu.jsx";
import {Outlet} from "react-router";

const Layout = () =>{
    return (
        <>
            <HeaderMenu/>
            <Outlet/>
        </>
        )


}

export default Layout;