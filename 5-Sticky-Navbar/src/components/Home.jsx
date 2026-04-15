import React from "react";

const Home = ({ smoothScrollTo }) => {
  return (
    <section id="home" className="home-section">
      <div className="hero-badge">&#10022; Creative Studio 2026</div>

      <div className="section-label">Welcome</div>

      <h1 className="section-title">
        Design that moves<br />people forward
      </h1>

      <p className="section-sub">
        We craft digital experiences that blend beauty with function —
        turning ideas into interfaces worth remembering.
      </p>

      <div className="hero-btns">
        <button
          className="btn-primary"
          onClick={() => smoothScrollTo("services")}
        >
          Explore Services
        </button>

        <button
          className="btn-ghost"
          onClick={() => smoothScrollTo("gallery")}
        >
          View Gallery
        </button>
      </div>
    </section>
  );
};

export default Home;