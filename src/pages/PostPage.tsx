import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { PostI } from '../components/Post';
import Post from '../components/Post';
import { fetchPostById } from '../services/postAPI';

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState<PostI>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    // Loads post by ID from server
    const handleRead = async () => {
        setError("");
        setLoading(true);
        try {
          const data = await fetchPostById(postId!);
          setPost(data[0]);
        } catch (e) {
            setError((e as Error).message);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {handleRead();}, []);  

  return (
    <main className="post">
        {loading && <p>Loading…</p>}
        {error && <p className="crud-error">{error}</p>}
        {post && <Post key={post.id} id={post.id} name={post.name} img={post.img} description={post.description} dateISO={post.dateISO} />}
    </main>

  );
}