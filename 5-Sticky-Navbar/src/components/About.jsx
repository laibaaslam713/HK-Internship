import React from "react";

const About = () => {
  const aboutCards = [
    {
      icon: "◆",
      color: "purple",
      title: "Design",
      desc: "Pixel-precise UI with thoughtful motion and hierarchy.",
    },
    {
      icon: "◆",
      color: "teal",
      title: "Develop",
      desc: "Clean, performant code built to scale and maintain.",
    },
    {
      icon: "◆",
      color: "coral",
      title: "Deliver",
      desc: "Launched on time, tested with care, iterated with data.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-label">About</div>

      <h2 className="section-title">
        Built on craft,<br />driven by purpose
      </h2>

      <p className="section-sub">
        A small team of designers and engineers obsessed with getting the details right.
      </p>

      <div className="about-grid">
        {aboutCards.map((item) => (
          <div className="about-card" key={item.title}>
            <div className={`about-icon ${item.color}`}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;