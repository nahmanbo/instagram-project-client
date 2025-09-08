import type { PropsWithChildren } from "react";
import "../../styles/application-layout/layout.css";
import Logo from "../Logo";
import Header from "./Header";
import Title from "./Title";

export default function Layout({ children }: PropsWithChildren) {
    return (<div className="layout">
            <Header>
                <Title text="Linkodkod -  Connected at the top" />
                <Logo/>
            </Header>
            {children}
            </div>);
  }