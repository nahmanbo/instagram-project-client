import type {PostI} from "../components/Post"
import { TokenManager } from "./tokenManager";
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

export const fetchPostById = async (id: string): Promise<PostI[]> => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Failed to fetch post.");
  }
  const data = await res.json();
  return data;
};

export const createPost = async (newPost: PostI): Promise<PostI[]> => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenManager.load()}`
    },
    body: JSON.stringify(newPost),
  });  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Failed to create post.");
  }
  const data = await res.json();
  return data;
};

// Fetch all Posts from server
export const fetchAllImgNames = async (): Promise<string[]> => {
  const res = await fetch(`${BASE_URL}/posts/img`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error || "Failed to fetch posts.");
  }

  const data = await res.json();
  console.log("data1 ", data )

  return Array.isArray(data) ? data : [];
};