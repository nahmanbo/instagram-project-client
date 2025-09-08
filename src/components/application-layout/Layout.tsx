import type { PropsWithChildren } from "react";

import Logo from "../Logo";
import Header from "./Header";
import Title from "./Title";
import "../../styles/application-layout/layout.css";

export default function Layout({ children }: PropsWithChildren) {
    return (
    <div className="layout">
        <Header>
            <Title text="Linkodkod -  Connected at the top" />
            <Logo/>
        </Header>
        {children}
    </div>);
  }