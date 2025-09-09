import { Link } from "react-router";
import "../styles/welcome.css";
import Logo from "../components/Logo";

// Renders the welcome page with a welcome message and navigation options.
export default function WelcomePage() {
  return (
    <main className="welcome">
      <section className="welcome-card">
        <div className="flex-title">
            <h1 className="welcome-title">Linkodkod</h1>
            <Logo></Logo>
        </div>
        <h3 className="welcome-subtitle">The new social media</h3>

        <div className="welcome-actions">
          <Link to="/auth?tab=login" className="btn">Login account</Link>
          <Link to="/auth?tab=register" className="btn">Create account</Link>
        </div>

        <small className="home-version">v1.0</small>
      </section>
    </main>
  );
}