import HeaderMenu from "./HeaderMenu.jsx";
import {Outlet} from "react-router";
import FooterText from "./FooterText.jsx";

const Layout = () =>{
    return (
        <>
            <HeaderMenu/>
            <Outlet/>
            <FooterText/>
        </>
        )


}

export default Layout;