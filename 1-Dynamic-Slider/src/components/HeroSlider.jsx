import React, { useState, useEffect } from "react";
import data from "../Data/ProjectData.json";

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

   const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${index * 100}%)`, display: "flex" }}
      >
        {data.map((item, i) => (
          <div className="slide" key={i} style={{ minWidth: "100%" }}>
            <img src={item.image} alt={item.title} />
            <div className="overlay"></div>
            <div className="content">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button>{item.btn}</button>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {data.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;