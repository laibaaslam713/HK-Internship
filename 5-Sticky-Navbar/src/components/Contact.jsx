import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-label">Contact</div>

      <h2 className="section-title">Let's build together</h2>

      <p className="section-sub">
        Have a project in mind? Drop us a line and we'll get back within 24 hours.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label>Name</label>
            <input type="text" placeholder="Alex Kim" required />
          </div>

          <div className="form-field">
            <label>Email</label>
            <input type="email" placeholder="hello@you.com" required />
          </div>
        </div>

        <div className="form-field">
          <label>Subject</label>
          <input type="text" placeholder="Project brief..." />
        </div>

        <div className="form-field">
          <label>Message</label>
          <textarea rows="5" placeholder="Tell us about your project..." />
        </div>

        <button className="submit-btn" type="submit">
          Send Message →
        </button>
      </form>
    </section>
  );
};

export default Contact;