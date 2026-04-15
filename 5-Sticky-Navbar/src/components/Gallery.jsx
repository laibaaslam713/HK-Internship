import React, { useState } from "react";

import dashboard from "../assets/dashboard.webp";
import mobile from "../assets/mobile.webp";
import branding from "../assets/branding.webp";
import ecommerce from "../assets/ecommerce.webp";
import landing from "../assets/landing.webp";
import saas from "../assets/saas.webp";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryData = [
    { label: "Dashboard", image: dashboard },
    { label: "Mobile", image: mobile },
    { label: "Branding", image: branding },
    { label: "E-commerce", image: ecommerce },
    { label: "Landing", image: landing },
    { label: "SaaS", image: saas },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-label">Gallery</div>

      <h2 className="section-title">Selected work</h2>

      <div className="gallery-grid">
        {galleryData.map((item, i) => (
          <div
            className="g-item"
            key={i}
            onClick={() => setSelectedImg(item.image)}
          >
            <img src={item.image} alt={item.label} />

            <div className="g-overlay">
              <span className="g-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          className="lightbox"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} alt="preview" />
        </div>
      )}
    </section>
  );
};

export default Gallery;