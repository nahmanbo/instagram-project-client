import { Routes, Route } from "react-router";

import Layout from "./components/application-layout/Layout";
import WelcomePage from "./pages/WelcomePage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import CreatePage from "./pages/CreatePage";

import './App.css'

function App() {
  return (
    <>
    <Layout>
      <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/auth" element={<AuthPage />} /> 
          <Route path="/home" element={<HomePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/crate" element={<CreatePage />} />
        </Routes>
    </Layout>
    </>
  )
}

export default App
