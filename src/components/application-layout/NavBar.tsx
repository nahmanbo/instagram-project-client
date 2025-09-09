import { NavLink } from "react-router";
import "../../styles/application-layout/navBar.css"

export type NavItem = { to: string; label: string };

export default function NavBar({ links }: { links: NavItem[] }) {
  return (
    <nav className="navbar">
      {links.map((l) => (
        <NavLink  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          key={l.to}
          to={l.to}>
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}
