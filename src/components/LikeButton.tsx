import { useState } from "react";
import "../styles/like-button.css"

export default function LikeButton() {
    const [likeCount, setLikeCount] = useState(0);

    return (
      <div className="like-section">
          <p className="like-count">{likeCount}</p>
          <button onClick={() => setLikeCount(likeCount + 1)} className="like-btn">❤️</button>
      </div>);
}
  