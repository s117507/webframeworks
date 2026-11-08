import { linkItems } from "../routes/Routes";
import { NavLink } from "react-router";

export default function Navbar() {
    return(
        <nav>
            <ul>
                {linkItems.map((link) => (
                    <li key={link.to}><NavLink to={link.to}>{link.label}</NavLink></li>
                ))}
            </ul>
        </nav>
    )
}