import { Routes, Route } from "react-router";
import './App.css'

import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CreatePage from "./pages/CreatePage";
import PostPage from "./pages/PostPage";
import Layout from "./components/application-layout/Layout";

function App() {
  return (
    <>
    <Layout>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} /> 
          <Route path="/post" element={<PostPage />} />
          <Route path="/crate" element={<CreatePage />} />
        </Routes>
    </Layout>
    </>
  )
}

export default App
