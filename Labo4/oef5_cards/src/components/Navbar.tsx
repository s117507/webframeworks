import { NavLink } from "react-router";
import styles from "./Navbar.module.css";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar} aria-label="Main">
      <NavLink to="/" end className={styles.home}>
        Home
      </NavLink>

      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}