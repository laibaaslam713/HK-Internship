import React, { useState, useEffect, useRef } from 'react';
import { api } from '../api';
import { useToast } from '../context/ToastContext';
import './AdminPanel.css';

const EMPTY = { company_name: '', description: '', mission: '', vision: '', image_url: '' };

export default function AdminPanel() {
  const { addToast } = useToast();
  const [form, setForm]         = useState(EMPTY);
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);
  const [saving, setSaving]     = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview]   = useState('');
  const [charCount, setCharCount] = useState({});
  const fileRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const { data } = await api.getAbout();
      setForm({
        company_name: data.company_name || '',
        description:  data.description  || '',
        mission:      data.mission       || '',
        vision:       data.vision        || '',
        image_url:    data.image_url     || '',
      });
      setPreview(data.image_url || '');
      updateCharCounts(data);
    } catch {
      addToast('Failed to load current data', 'error');
    } finally {
      setLoading(false);
    }
  }

  function updateCharCounts(data) {
    setCharCount({
      description: (data.description || '').length,
      mission:     (data.mission     || '').length,
      vision:      (data.vision      || '').length,
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (['description', 'mission', 'vision'].includes(name)) {
      setCharCount(prev => ({ ...prev, [name]: value.length }));
    }
    if (name === 'image_url') setPreview(value);
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const { image_url } = await api.uploadImage(file);
      setForm(prev => ({ ...prev, image_url }));
      setPreview(image_url);
      addToast('Image uploaded successfully');
    } catch {
      addToast('Image upload failed', 'error');
    } finally {
      setUploading(false);
    }
  }

  function validate() {
    const e = {};
    if (!form.company_name.trim()) e.company_name = 'Company name is required';
    if (!form.description.trim())  e.description  = 'Description is required';
    if (!form.mission.trim())      e.mission      = 'Mission is required';
    if (!form.vision.trim())       e.vision       = 'Vision is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSaving(true);
    try {
      const result = await api.updateAbout(form);
      addToast(result.message || 'About page updated!');
      setErrors({});
    } catch (err) {
      if (err.errors) {
        setErrors(err.errors);
        addToast('Please fix the errors below', 'error');
      } else {
        addToast('Update failed. Try again.', 'error');
      }
    } finally {
      setSaving(false);
    }
  }

  function handleReset() {
    if (window.confirm('Reset all changes?')) fetchData();
  }

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="loading-ring"></div>
        <p>Loading CMS data…</p>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div className="container">
          <div className="admin-header-inner">
            <div>
              <span className="badge badge-gold">Admin Panel</span>
              <h1 className="admin-title">About Page Editor</h1>
              <p className="admin-subtitle">Manage your company's public-facing content</p>
            </div>
            <div className="admin-actions">
              <button className="btn btn-ghost" onClick={handleReset} disabled={saving}>
                Reset
              </button>
              <button
                className="btn btn-primary btn-lg"
                onClick={handleSubmit}
                disabled={saving}
              >
                {saving ? <><div className="spinner" />&nbsp;Saving…</> : '↑ Publish Changes'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <form className="admin-form" onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            {/* LEFT COLUMN */}
            <div className="form-left">

              <section className="admin-section card">
                <div className="section-header">
                  <span className="section-icon">🏢</span>
                  <h2 className="section-title">Company Identity</h2>
                </div>
                <div className="section-body">
                  <div className="form-group">
                    <label className="form-label">Company Name *</label>
                    <input
                      type="text"
                      name="company_name"
                      value={form.company_name}
                      onChange={handleChange}
                      className={`form-control ${errors.company_name ? 'error' : ''}`}
                      placeholder="e.g. Acme Corporation"
                      maxLength={100}
                    />
                    {errors.company_name && <p className="form-error">{errors.company_name}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Description *
                      <span className="char-count">{charCount.description || 0}</span>
                    </label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      className={`form-control ${errors.description ? 'error' : ''}`}
                      placeholder="A compelling overview of your company…"
                      rows={5}
                      maxLength={1000}
                    />
                    {errors.description && <p className="form-error">{errors.description}</p>}
                  </div>
                </div>
              </section>

              <section className="admin-section card">
                <div className="section-header">
                  <span className="section-icon">🎯</span>
                  <h2 className="section-title">Mission & Vision</h2>
                </div>
                <div className="section-body">
                  <div className="form-group">
                    <label className="form-label">
                      Mission Statement *
                      <span className="char-count">{charCount.mission || 0}</span>
                    </label>
                    <textarea
                      name="mission"
                      value={form.mission}
                      onChange={handleChange}
                      className={`form-control ${errors.mission ? 'error' : ''}`}
                      placeholder="What does your company do and for whom?"
                      rows={4}
                      maxLength={500}
                    />
                    {errors.mission && <p className="form-error">{errors.mission}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Vision Statement *
                      <span className="char-count">{charCount.vision || 0}</span>
                    </label>
                    <textarea
                      name="vision"
                      value={form.vision}
                      onChange={handleChange}
                      className={`form-control ${errors.vision ? 'error' : ''}`}
                      placeholder="Where is your company headed in the future?"
                      rows={4}
                      maxLength={500}
                    />
                    {errors.vision && <p className="form-error">{errors.vision}</p>}
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="form-right">
              <section className="admin-section card">
                <div className="section-header">
                  <span className="section-icon">🖼️</span>
                  <h2 className="section-title">Company Image</h2>
                </div>
                <div className="section-body">
                  <div className="image-preview-box">
                    {preview ? (
                      <img src={preview} alt="Preview" className="image-preview" onError={() => setPreview('')} />
                    ) : (
                      <div className="image-placeholder">
                        <span>No image selected</span>
                      </div>
                    )}
                  </div>

                  <div className="image-actions">
                    <input
                      type="file"
                      ref={fileRef}
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={() => fileRef.current.click()}
                      disabled={uploading}
                    >
                      {uploading ? <><div className="spinner spinner-dark" /> Uploading…</> : '↑ Upload Image'}
                    </button>
                    <span className="or-divider">or</span>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Image URL</label>
                    <input
                      type="url"
                      name="image_url"
                      value={form.image_url}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="https://example.com/image.jpg"
                    />
                    <p className="form-hint">Paste a URL or upload a file above</p>
                  </div>
                </div>
              </section>

              <section className="admin-section card preview-card">
                <div className="section-header">
                  <span className="section-icon">👁</span>
                  <h2 className="section-title">Live Preview</h2>
                </div>
                <div className="section-body preview-body">
                  <div className="mini-preview">
                    <h3 className="preview-company">{form.company_name || 'Company Name'}</h3>
                    <p className="preview-desc">{form.description || 'Company description will appear here…'}</p>
                    <div className="preview-tags">
                      {form.mission && <span className="preview-tag">Mission ✓</span>}
                      {form.vision  && <span className="preview-tag">Vision ✓</span>}
                      {form.image_url && <span className="preview-tag">Image ✓</span>}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="form-footer">
            <button type="button" className="btn btn-ghost" onClick={handleReset} disabled={saving}>
              Discard Changes
            </button>
            <button type="submit" className="btn btn-primary btn-lg" disabled={saving}>
              {saving ? <><div className="spinner" />Saving Changes…</> : '↑ Publish Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
