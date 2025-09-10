import { useEffect, useState } from "react";
import { fetchAllPosts } from "../services/postAPI"; 
import type { PostI } from "../components/Post";
import Post from "../components/Post";
import PostBoard from "../components/PostBoard";

export default function HomePage() {
  const [posts, setPosts] = useState<PostI[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Loads all posts from server
  const handleRead = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await fetchAllPosts();
      setPosts(data);
    } catch (e) {
        setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {handleRead()
    document.body.style.overflow = "scroll";
    return ()=> {document.body.style.overflow = "hidden"}
  }, []);  

  return (
    <main className="home">
        {loading && <p>Loading…</p>}
        {error && <p className="crud-error">{error}</p>}

        <PostBoard>
        {posts.map((post) => (
            <Post key={post.id} id={post.id} name={post.name} img={post.img} description={post.description} dateISO={post.dateISO} />
          ))}
        </PostBoard>
    </main>
  );
}
