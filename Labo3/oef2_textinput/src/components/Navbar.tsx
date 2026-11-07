import { NavLink } from "react-router";
import { navLinks } from "../data/data";

export default function Navbar(){
    return(
        <nav>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.to}><NavLink to={link.to}>{link.label}</NavLink></li>
                ))}
            </ul>
        </nav>
    )
}