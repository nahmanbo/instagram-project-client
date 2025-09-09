import type { PropsWithChildren } from "react";

import Logo from "../Logo";
import Header from "./Header";
import Title from "./Title";
import "../../styles/application-layout/layout.css";
import NavBar from "./NavBar";
import { NavLinksPerPage } from "../../services/NavLinks";

export default function Layout({ children }: PropsWithChildren) {
    const links = NavLinksPerPage(); 

    return (
    <div className="layout">
        <Header>
            <NavBar links={links} />
            <Title text="Linkodkod -  Connected at the top" />
            <Logo/>
        </Header>
        {children}
    </div>);
  }