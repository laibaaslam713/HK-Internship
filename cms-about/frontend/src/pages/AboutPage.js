import React, { useState, useEffect } from 'react';
import { api } from '../api';
import './AboutPage.css';

export default function AboutPage() {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  useEffect(() => {
    api.getAbout()
      .then(({ data }) => setData(data))
      .catch(() => setError('Failed to load content. Please try again.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <div className="about-loading">
      <div className="about-loader">
        <div className="loader-bar"></div>
        <div className="loader-bar"></div>
        <div className="loader-bar"></div>
      </div>
      <p>Loading…</p>
    </div>
  );

  if (error) return (
    <div className="about-error">
      <p>⚠️ {error}</p>
      <button className="btn btn-primary" onClick={() => window.location.reload()}>Retry</button>
    </div>
  );

  if (!data) return null;

  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="hero-bg-text" aria-hidden="true">About</div>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <span className="badge badge-gold">Our Story</span>
              <h1 className="hero-title">{data.company_name}</h1>
              <p className="hero-desc">{data.description}</p>
              <div className="hero-meta">
                <span className="meta-pill">Est. 2024</span>
                <span className="meta-pill">Driven by Purpose</span>
              </div>
            </div>
            {data.image_url && (
              <div className="hero-image-wrap">
                <img src={data.image_url} alt={data.company_name} className="hero-image" />
                <div className="image-frame" />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mv-section">
        <div className="container">
          <div className="mv-grid">
            <article className="mv-card">
              <div className="mv-icon">⊙</div>
              <h2 className="mv-label">Mission</h2>
              <p className="mv-text">{data.mission}</p>
              <div className="mv-accent" />
            </article>
            <div className="mv-divider" />
            <article className="mv-card">
              <div className="mv-icon">◈</div>
              <h2 className="mv-label">Vision</h2>
              <p className="mv-text">{data.vision}</p>
              <div className="mv-accent mv-accent-right" />
            </article>
          </div>
        </div>
      </section>

      <section className="about-footer-strip">
        <div className="container">
          <p className="footer-stamp">
            Last updated: {new Date(data.updated_at).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}
          </p>
        </div>
      </section>
    </div>
  );
}
