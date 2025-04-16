import HeaderMenu from "./HeaderMenu.jsx";
import {Outlet} from "react-router";
import FooterText from "./FooterText.jsx";

const Layout = () =>{
    return (
        <div className="layout-wrapper">
            <HeaderMenu/>
            <div className="content">
                <Outlet/>
            </div>
            <FooterText/>
        </div>
        )


}

export default Layout;