import { useParams } from 'react-router';

export default function PostPage() {
  const { postId } = useParams();

  return (
    <div>
      <h1>Post ID: {postId}</h1>
      {/* Fetch and display product details based on productId */}
    </div>
  );
}