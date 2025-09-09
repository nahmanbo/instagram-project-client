import type {PostI} from "../components/Post"
const BASE_URL = "http://localhost:1212/api"; 

// Fetch all Posts from server
export const fetchAllPosts = async (): Promise<PostI[]> => {
  const res = await fetch(`${BASE_URL}/posts`, {
    headers: {
      Accept: "application/json"},
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Failed to fetch posts.");
  }

  const data = await res.json();
  return Array.isArray(data) ? data : [];
};