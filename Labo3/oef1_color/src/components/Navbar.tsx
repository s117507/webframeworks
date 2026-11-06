import { NavLink } from "react-router";
import { colorItems } from "../routes/Routes";

export default function Navbar() {
    return(
        <nav>
            <ul>
                {colorItems.map((link) =>
                <li key={link.to}>
                    <NavLink to={link.to}>{link.label}</NavLink>
                </li>
                )}
            </ul>
        </nav>
    )
}