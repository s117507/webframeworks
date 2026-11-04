import { NavLink } from "react-router"
import { links } from "../data/Arrays"

export default function Navbar() {
    return(
            <nav>
                <NavLink to="/" end>
                    Logo
                </NavLink>
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