import { useLocation } from "react-router";
import type { NavItem } from "../components/application-layout/NavBar";

export function NavLinksPerPage(): NavItem[] {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return [
      { to: "/auth?tab=login", label: "Login" },
      { to: "/auth?tab=register", label: "Register" }];
  }
  if (pathname.startsWith("/home")) {
    return [
      { to: "/create", label: "Create new Post" },
      { to: "/home", label: "Home" },
    ];
  }
  if (pathname.startsWith("/create")) {
    return [
      { to: "/home", label: "Home" },
    ];
  }
  return [
    { to: "/", label: "Back to start" }];
}
