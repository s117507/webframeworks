import { NavLink } from "react-router";
import { links } from "../data/data";

export default function Navbar() {
    return(
        <nav>
            <ul>
                {links.map((link) => (
                    <li key={link.to}>
                        <NavLink to={link.to}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}