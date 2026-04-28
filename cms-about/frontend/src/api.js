const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const api = {
  getAbout: async () => {
    const res = await fetch(`${BASE_URL}/about`);
    if (!res.ok) throw new Error('Failed to fetch about data');
    return res.json();
  },

  updateAbout: async (data) => {
    const res = await fetch(`${BASE_URL}/about`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) throw json;
    return json;
  },

  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch(`${BASE_URL}/about/upload`, {
      method: 'POST',
      body: formData,
    });
    if (!res.ok) throw new Error('Image upload failed');
    return res.json();
  },

  getHistory: async () => {
    const res = await fetch(`${BASE_URL}/about/history`);
    if (!res.ok) throw new Error('Failed to fetch history');
    return res.json();
  },

  restoreVersion: async (id) => {
    const res = await fetch(`${BASE_URL}/about/restore/${id}`, { method: 'POST' });
    if (!res.ok) throw new Error('Restore failed');
    return res.json();
  },
};
