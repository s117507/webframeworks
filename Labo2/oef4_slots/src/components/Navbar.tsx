import { NavLink } from "react-router"
import { links } from "../data/Arrays"
import styles from "./Navbar.module.css"

export default function Navbar() {
    return(
            <nav className={styles.navbar}>
                <NavLink to="/" end className={styles.logo}>
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