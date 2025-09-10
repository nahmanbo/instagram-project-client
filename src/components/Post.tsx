import { Link } from "react-router";

import LikeButton from "./LikeButton";
import Logo from "./Logo";
import "../styles/post.css";

const BASE_URL = "http://localhost:1212"; 

//Post interface with all variables and types
export interface PostI {
  id?: number;
  name: string;
  img: string;
  description: string;
  time?: string;
}

//Post component used on the home page on a post page
export default function Post({id, name, img, description, time }: PostI) {
  return (
      <Link to={`/post/${id}`} className="post-container" >
          <div className="img-container">
              <Logo></Logo>
              <img src={`${BASE_URL}/${img}`}  className="post-img" />
          </div>

          <div className="text-container">
              <h3 className="post-name">{name}</h3>
              <p className="post-description">{description}</p>
          </div>
          
          <div className="footer-container">
              <time className="post-date">{time}</time>
              <LikeButton/>
          </div>
      </Link>
  );
}
