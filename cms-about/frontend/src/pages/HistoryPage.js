import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { useToast } from '../context/ToastContext';
import './HistoryPage.css';

export default function HistoryPage() {
  const { addToast } = useToast();
  const [history, setHistory]   = useState([]);
  const [loading, setLoading]   = useState(true);
  const [restoring, setRestoring] = useState(null);
  const [expanded, setExpanded]   = useState(null);

  useEffect(() => {
    api.getHistory()
      .then(({ data }) => setHistory(data))
      .catch(() => addToast('Failed to load history', 'error'))
      .finally(() => setLoading(false));
  }, []);

  async function handleRestore(id) {
    if (!window.confirm('Restore this version? Current content will be overwritten.')) return;
    setRestoring(id);
    try {
      await api.restoreVersion(id);
      addToast('Version restored successfully!');
    } catch {
      addToast('Restore failed', 'error');
    } finally {
      setRestoring(null);
    }
  }

  return (
    <div className="history-page">
      <div className="history-header">
        <div className="container">
          <span className="badge badge-sage">Version Control</span>
          <h1 className="history-title">Change History</h1>
          <p className="history-subtitle">Track and restore previous versions of your About page</p>
        </div>
      </div>

      <div className="container">
        <div className="history-body">
          {loading && (
            <div className="history-loading">
              <div className="loading-ring" />
              <p>Loading history…</p>
            </div>
          )}

          {!loading && history.length === 0 && (
            <div className="history-empty card">
              <span className="empty-icon">📋</span>
              <h3>No history yet</h3>
              <p>Version history will appear here after you make your first update.</p>
            </div>
          )}

          {!loading && history.length > 0 && (
            <div className="history-timeline">
              {history.map((v, i) => (
                <div key={v._id} className={`history-item card ${expanded === v._id ? 'expanded' : ''}`}>
                  <div className="history-item-header" onClick={() => setExpanded(expanded === v._id ? null : v._id)}>
                    <div className="history-dot">
                      <div className="dot-inner" />
                    </div>
                    <div className="history-meta">
                      <div className="history-name">{v.company_name}</div>
                      <div className="history-date">
                        {new Date(v.saved_at).toLocaleString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric',
                          hour: '2-digit', minute: '2-digit'
                        })}
                      </div>
                    </div>
                    <div className="history-badge-wrap">
                      {i === 0 && <span className="badge badge-gold">Latest</span>}
                    </div>
                    <div className="history-actions">
                      <button
                        className="btn btn-ghost btn-sm"
                        onClick={(e) => { e.stopPropagation(); handleRestore(v._id); }}
                        disabled={restoring === v._id}
                      >
                        {restoring === v._id ? 'Restoring…' : '↺ Restore'}
                      </button>
                      <button className="expand-btn">{expanded === v._id ? '▲' : '▼'}</button>
                    </div>
                  </div>

                  {expanded === v._id && (
                    <div className="history-detail">
                      <hr className="divider" />
                      <div className="detail-grid">
                        <div className="detail-section">
                          <div className="detail-label">Description</div>
                          <p className="detail-text">{v.description}</p>
                        </div>
                        <div className="detail-section">
                          <div className="detail-label">Mission</div>
                          <p className="detail-text">{v.mission}</p>
                        </div>
                        <div className="detail-section">
                          <div className="detail-label">Vision</div>
                          <p className="detail-text">{v.vision}</p>
                        </div>
                        {v.image_url && (
                          <div className="detail-section">
                            <div className="detail-label">Image</div>
                            <img src={v.image_url} alt="version" className="detail-image" />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
