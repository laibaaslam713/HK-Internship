import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE = "http://localhost:5000/api";

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
  </svg>
);

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${API_BASE}/services/${slug}`);
        setService(res.data.data);
      } catch (err) {
        setError(
          err.response?.status === 404
            ? "Service not found."
            : "Failed to load service details."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="loading-wrapper" style={{ minHeight: "70vh" }}>
        <div className="spinner" />
        <p className="loading-text">Loading service details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-wrapper" style={{ minHeight: "70vh" }}>
        <div className="error-icon">⚠️</div>
        <h3 className="error-title">Oops!</h3>
        <p className="error-msg">{error}</p>
        <button className="btn-retry" onClick={() => navigate("/services")}>
          ← Back to Services
        </button>
      </div>
    );
  }

  if (!service) return null;

  return (
    <div className="details-page fade-in">
      
      <button className="back-btn" onClick={() => navigate("/services")}>
        <ArrowLeft /> Back to Services
      </button>

      <div className="details-hero">
        <div className="details-image-wrapper">
          <img
            className="details-image"
            src={
              service.image_url ||
              `https://via.placeholder.com/600x380/0d1821/00d4ff?text=${encodeURIComponent(service.title)}`
            }
            alt={service.title}
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/600x380/0d1821/00d4ff?text=${encodeURIComponent(service.title)}`;
            }}
          />
        </div>

        <div className="details-content">
          <span className="details-category">{service.category}</span>
          <h1 className="details-title">
            {service.icon && <span style={{ marginRight: "0.5rem" }}>{service.icon}</span>}
            {service.title}
          </h1>
          <p className="details-description">{service.description}</p>

          {service.price != null && (
            <div className="details-price-box">
              <div>
                <p className="details-price-label">Starting From</p>
                <p className="details-price-period">Per project</p>
              </div>
              <span className="details-price-value">
                ${service.price.toLocaleString()}
              </span>
            </div>
          )}

          <div className="details-actions">
            <button
              className="btn-primary"
              onClick={() => (window.location.href = "mailto:contact@example.com")}
            >
              📩 Contact Us
            </button>
            <button
              className="btn-secondary"
              onClick={() => (window.location.href = "mailto:order@example.com")}
            >
              🛒 Order Now
            </button>
          </div>
        </div>
      </div>

      <div className="details-body">
        <h2>About This Service</h2>
        <p>{service.details}</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          marginTop: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "Category", value: service.category },
          { label: "Status", value: service.status === "active" ? "✅ Active" : "❌ Inactive" },
          {
            label: "Added",
            value: new Date(service.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-sm)",
              padding: "0.85rem 1.25rem",
              minWidth: "150px",
            }}
          >
            <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600, marginBottom: "0.3rem" }}>
              {item.label}
            </p>
            <p style={{ fontSize: "0.92rem", color: "var(--text-primary)", fontWeight: 500 }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}