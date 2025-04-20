import HeaderMenu from "./HeaderMenu.jsx";
import {Outlet} from "react-router";
import FooterText from "./FooterText.jsx";
import {ThemeProvider, useTheme} from "../contexts/ThemeContext.jsx";

const Layout = () =>{

    return (
        <ThemeProvider>
            <div className="layout-wrapper">


            <HeaderMenu/>
            <div className="content">
                <Outlet/>
            </div>
            <FooterText/>
            </div>
        </ThemeProvider>
        )


}

export default Layout;