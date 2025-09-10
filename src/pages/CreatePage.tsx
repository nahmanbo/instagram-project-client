import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { FormEvent } from "react";
//import { TokenManager } from "../services/tokenManager"
import { createPost, fetchAllImgNames } from "../services/postAPI";
import "../styles/create-page.css";
import type { PostI } from "../components/Post";

export default function CreatePage() {
    return (
    <main className="create">
      <section className="create-card">
        <h1 className="create-title">Create a post</h1>
        < AddPostForm/>
      </section>
    </main>
  );
}

// Renders the authentication form based on the isRegister prop.
function AddPostForm() {
  const navigate = useNavigate();
  const [imgNames, setImgNames] = useState([""]);
  const [error, setError] = useState("");

  const handleLoadImame = async () => {
    setError("");
    try {
      const data = await fetchAllImgNames();
      setImgNames(data);
    } catch (e) {
        setError((e as Error).message);
    }
  };

  useEffect(() => {handleLoadImame()}, []);  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const img = formData.get("img") as string;
    const description = formData.get("description") as string;
    const name = formData.get("name") as string;

    try {
         const newPost:PostI= {name, img, description} 
          await createPost(newPost);
          navigate("/");
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      }
    };
  
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

      <label>Select img</label>
      <select name="img">
        {imgNames.map( (x,y) => <option key={y}>{x}</option> )}
      </select>  

      <label>Enter description</label>
      <input name="description" type="text" placeholder="Enter description" required />
      <button type="submit">submit</button>
      
    </form>
  );
}