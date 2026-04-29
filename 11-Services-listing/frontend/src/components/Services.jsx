import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE = "http://localhost:5000/api";

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ServiceCard = ({ service, onClick }) => (
  <div className="service-card" onClick={() => onClick(service.slug)}>
    <div className="card-image-wrapper">
      <img
        className="card-image"
        src={service.image_url || `https://via.placeholder.com/400x200/0d1821/00d4ff?text=${service.title}`}
        alt={service.title}
        onError={(e) => { e.target.src = `https://via.placeholder.com/400x200/0d1821/00d4ff?text=${encodeURIComponent(service.title)}`; }}
      />
      <div className="card-image-overlay" />
      <span className="card-category-badge">{service.category}</span>
    </div>

    <div className="card-body">
      <div className="card-header">
        <span className="card-icon">{service.icon || "⚙️"}</span>
        <h3 className="card-title">{service.title}</h3>
      </div>
      <p className="card-description">{service.description}</p>

      <div className="card-footer">
        <div>
          {service.price != null ? (
            <>
              <span className="card-price">${service.price.toLocaleString()}</span>
              <span className="card-price-label">Starting price</span>
            </>
          ) : (
            <span className="card-price" style={{ fontSize: "0.9rem" }}>Custom Quote</span>
          )}
        </div>
        <button className="btn-view">
          View Details <ArrowRight />
        </button>
      </div>
    </div>
  </div>
);

export default function Services() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ total: 0, totalPages: 1, currentPage: 1 });
  const LIMIT = 6;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  // Fetch categories
  useEffect(() => {
    axios
      .get(`${API_BASE}/services/categories`)
      .then((res) => setCategories(res.data.data || ["All"]))
      .catch(() => setCategories(["All"]));
  }, []);

  const fetchServices = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = { page, limit: LIMIT };
      if (activeCategory !== "All") params.category = activeCategory;
      if (debouncedSearch) params.search = debouncedSearch;

      const res = await axios.get(`${API_BASE}/services`, { params });
      setServices(res.data.data || []);
      setPagination({
        total: res.data.total,
        totalPages: res.data.totalPages,
        currentPage: res.data.currentPage,
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load services. Please check if the backend server is running.");
    } finally {
      setLoading(false);
    }
  }, [activeCategory, debouncedSearch, page]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const handleCardClick = (slug) => navigate(`/services/${slug}`);

  return (
    <>
      <section className="hero">
        <div className="hero-badge">✦ What We Offer</div>
        <h1 className="hero-title">
          Our <span className="highlight">Services</span>
        </h1>
        <p className="hero-subtitle">
          Transformative digital solutions crafted for growth. From web apps to AI
          integrations — we build what your business needs.
        </p>

        <div className="search-wrapper">
          <span className="search-icon"><SearchIcon /></span>
          <input
            className="search-input"
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <div className="filter-section">
        <p className="filter-label">Filter by Category</p>
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="services-section">
        <div className="services-meta">
          <p className="services-count">
            Showing <span>{services.length}</span> of <span>{pagination.total}</span> services
            {activeCategory !== "All" && <> in <span>{activeCategory}</span></>}
          </p>
        </div>

        {loading ? (
          <div className="loading-wrapper">
            <div className="spinner" />
            <p className="loading-text">Fetching services...</p>
          </div>
        ) : error ? (
          <div className="error-wrapper">
            <div className="error-icon">⚠️</div>
            <h3 className="error-title">Something went wrong</h3>
            <p className="error-msg">{error}</p>
            <button className="btn-retry" onClick={fetchServices}>Try Again</button>
          </div>
        ) : (
          <>
            <div className="services-grid">
              {services.length === 0 ? (
                <div className="empty-wrapper">
                  <div className="empty-icon">🔍</div>
                  <h3 className="empty-title">No services found</h3>
                  <p className="empty-msg">Try adjusting your search or filter.</p>
                </div>
              ) : (
                services.map((service) => (
                  <ServiceCard key={service._id} service={service} onClick={handleCardClick} />
                ))
              )}
            </div>

            {pagination.totalPages > 1 && (
              <div className="pagination">
                <button
                  className="page-btn"
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                >
                  <ChevronLeft />
                </button>
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    className={`page-btn ${page === p ? "active" : ""}`}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                ))}
                <button
                  className="page-btn"
                  disabled={page === pagination.totalPages}
                  onClick={() => setPage((p) => p + 1)}
                >
                  <ChevronRight />
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}