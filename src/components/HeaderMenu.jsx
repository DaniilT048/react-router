import {NavLink} from "react-router";
import routes from "../routes.jsx";



const HeaderMenu = () =>{
    return(
        <ul className="header-menu">
            {routes.map((route) =>
                    <li key={route.path}>
                    <NavLink to={`/${route.path}`}>{route.label}</NavLink>
                </li>)}
        </ul>

    )
}

export default HeaderMenu;
