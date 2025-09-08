// src/pages/Crud.tsx
import { useState } from "react";
import { fetchAllPosts } from "../services/postAPI"; 
import type { PostI } from "../components/Post";
import Post from "../components/Post";
import PostBoard from "../components/PostBoard";

// Renders the CRUD page with read & delete actions.
export default function HomePage() {
  const [posts, setPosts] = useState<PostI[]>([]);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState("");

  // Loads all riddles from server
  const handleRead = async () => {
    //setError("");
    //setLoading(true);
    try {
      const data = await fetchAllPosts();
      setPosts(data);
    } catch (e) {
        console.log(e)
      //setError((e as Error).message);
    } finally {
      //setLoading(false);
    }
  };
  handleRead();

 
  return (
    <main className="home">
        <PostBoard>
        {posts.map((post) => (
            <Post key={post.id} id={post.id} name={post.name} img={post.img} description={post.description} dateISO={post.dateISO} />
          ))}
        </PostBoard>
    </main>
  );
}
