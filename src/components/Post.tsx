import LikeButton from "./LikeButton";
import Logo from "./Logo";

import "../styles/post.css";

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
              <img src={img}  className="post-img " />
          </div>

          <h3 className="post-name">{name}</h3>
          <p className="post-description">{description}</p>

          <div className="post-footer">
              {dateISO && <time className="post-date">{new Date(dateISO).toLocaleDateString("he-IL")}</time>}
              <LikeButton/>
          </div>

      </div>
  );
}
