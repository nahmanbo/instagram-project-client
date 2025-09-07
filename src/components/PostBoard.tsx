import { type PropsWithChildren } from "react";
import "../styles/post-board.css";

export default function PostBoard({ children }: PropsWithChildren) {
  return <div className="post-board">{children}</div>;
}