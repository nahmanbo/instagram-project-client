import { Routes, Route } from "react-router";
import './App.css'
import Header from './components/application-layout/Header'
import Title from './components/application-layout/Title'
import Logo from './components/Logo'
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CreatePage from "./pages/CreatePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
    <Header>
        <Title text="Linkodkod -  Connected at the top" />
        <Logo/>
    </Header>

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} /> 
        <Route path="/post" element={<PostPage />} />
        <Route path="/crate" element={<CreatePage />} />
      </Routes>

    </>
  )
}

export default App
