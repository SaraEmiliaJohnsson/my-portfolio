import "./HomeComponent.css";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I’m <span className="highlight">Sara Johnsson</span>
          </h1>
          <p className="hero-subtitle">Frontend Developer & Creative Thinker</p>
          <p className="hero-text">
            I craft modern, responsive websites with a touch of color and a lot of heart.
          </p>
          <Link to="/portfolio" className="hero-button">
            See my work
          </Link>
        </div>

        {/* VÅGEN */}
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </section>
    </main>
  );
};

export default HomeComponent;
