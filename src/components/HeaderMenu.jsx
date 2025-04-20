import {NavLink} from "react-router";
import routes from "../routes.jsx";
import {useTheme} from "../contexts/ThemeContext.jsx";
import {useContext} from "react";
import { AiFillMoon } from "react-icons/ai";


const HeaderMenu = () =>{
    const {toggleTheme}= useTheme('light');
    return(
        <div className="header-menu">
            <button onClick={toggleTheme}><AiFillMoon /></button>
            <ul className="header-menu-list">
                {routes.map((route) =>
                    <li key={route.path}>
                        <NavLink to={`${route.path}`}>{route.label}</NavLink>
                    </li>)}

            </ul>

        </div>

    )
}

export default HeaderMenu;
