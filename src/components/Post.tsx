import LikeButton from "./LikeButton";
import Logo from "./Logo";

import "../styles/post.css";
const BASE_URL = "http://localhost:1212"; 


export interface PostI {
  id: number;
  name: string;
  img: string;
  description: string;
  dateISO?: string;
}


export default function Post({ name, img, description, dateISO }: PostI) {
  return (
      <div className="post-container">
          <div className="img-container">
              <Logo></Logo>
              <img src={`${BASE_URL}/${img}`}  className="post-img" />
          </div>

          <h3 className="post-name">{name}</h3>
          <p className="post-description">{description}</p>

          <div className="post-footer">
              {dateISO && <time className="post-date">{new Date(dateISO).toLocaleDateString()}</time>}
              <LikeButton/>
          </div>

      </div>
  );
}
