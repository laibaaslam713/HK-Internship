import React from "react";

const Services = () => {
  const servicesData = [
    {
      tag: "UI/UX",
      title: "Interface Design",
      desc: "Wireframes, prototypes, and high-fidelity mockups for web and mobile.",
    },
    {
      tag: "Front-end",
      title: "Web Development",
      desc: "React, Vue, and vanilla JS apps optimized for performance.",
    },
    {
      tag: "Brand",
      title: "Visual Identity",
      desc: "Logo, color system, and typography that builds recognition.",
    },
    {
      tag: "Strategy",
      title: "Product Consulting",
      desc: "From roadmap to launch — guiding decisions with experience.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-label">Services</div>

      <h2 className="section-title">What we do</h2>

      <p className="section-sub">
        End-to-end digital services tailored for modern products.
      </p>

      <div className="services-list">
        {servicesData.map((service) => (
          <div className="service-item" key={service.title}>
            <div className="service-tag">{service.tag}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;