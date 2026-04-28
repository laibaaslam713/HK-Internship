# CMS About Page Management System

A full-stack CMS for managing your About page dynamically — no code editing required.

## Stack
- **Frontend**: React.js + React Router
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose

---

## Project Structure

```
cms-about/
├── backend/
│   ├── server.js          # Express API + MongoDB models
│   ├── .env               # Environment variables
│   ├── package.json
│   └── uploads/           # Auto-created for image uploads
│
└── frontend/
    ├── public/index.html
    ├── package.json
    └── src/
        ├── App.js              # Router + layout
        ├── api.js              # API service layer
        ├── index.css           # Global design tokens
        ├── context/
        │   └── ToastContext.js # Global notifications
        ├── components/
        │   └── Navbar.js
        └── pages/
            ├── AboutPage.js    # Public-facing About page
            ├── AdminPanel.js   # CMS editor form
            └── HistoryPage.js  # Version history + restore
```

---

## Setup & Run

### 1. Prerequisites
- Node.js v18+
- MongoDB running locally (`mongod`) **or** a MongoDB Atlas URI

### 2. Backend

```bash
cd backend
npm install
# Edit .env if using Atlas:
#   MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/cms_about
npm start
# → Server on http://localhost:5000
```

### 3. Frontend

```bash
cd frontend
npm install
npm start
# → App on http://localhost:3000
```

---

## API Reference

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | `/about`            | Fetch current about data |
| PUT    | `/about`            | Update about data        |
| POST   | `/about/upload`     | Upload image file        |
| GET    | `/about/history`    | Get last 10 versions     |
| POST   | `/about/restore/:id`| Restore a past version   |

### PUT /about — Request Body
```json
{
  "company_name": "Acme Corporation",
  "description":  "We build things.",
  "mission":      "To empower people.",
  "vision":       "A better world.",
  "image_url":    "https://example.com/img.jpg"
}
```

### Validation Rules
- All four text fields are **required** and cannot be blank
- `image_url` is optional
- Image uploads: max **5MB**, formats: jpeg/jpg/png/gif/webp

---

## Database Schema

**Collection: `abouts`** (single document)
| Field        | Type   | Required |
|--------------|--------|----------|
| company_name | String | ✅       |
| description  | String | ✅       |
| mission      | String | ✅       |
| vision       | String | ✅       |
| image_url    | String | ❌       |
| updated_at   | Date   | auto     |

**Collection: `abouthistories`** (up to 10 versions stored)
- Automatically saved before every update
- Restorable via `/about/restore/:id`

---

## Features

### Admin Panel (`/admin`)
- ✅ Edit company name, description, mission, vision
- ✅ Upload image file (POST /about/upload)
- ✅ Paste image URL
- ✅ Live preview pane updates as you type
- ✅ Character counters on text fields
- ✅ Field-level validation with error messages
- ✅ Loading spinner during save
- ✅ Toast success/error notifications

### About Page (`/about`)
- ✅ Fully dynamic — no hardcoded content
- ✅ Fetches from GET /about on load
- ✅ Displays image with editorial layout
- ✅ Mission & Vision sections
- ✅ Last-updated timestamp

### History Page (`/history`)
- ✅ Last 10 versions listed
- ✅ Expand to see full details
- ✅ One-click restore

---

## Environment Variables

### backend/.env
```
MONGO_URI=mongodb://localhost:27017/cms_about
PORT=5000
```

### frontend/.env (optional)
```
REACT_APP_API_URL=http://localhost:5000
```

---

## Customization
- To change the port: update `PORT` in `backend/.env`
- To use a remote DB: update `MONGO_URI` with your Atlas connection string
- To add auth: add JWT middleware to `PUT /about` in `server.js`
