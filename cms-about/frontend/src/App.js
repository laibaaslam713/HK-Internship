import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import AdminPanel from './pages/AdminPanel';
import HistoryPage from './pages/HistoryPage';
import { ToastProvider } from './context/ToastContext';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about"   element={<AboutPage />} />
          <Route path="/admin"   element={<AdminPanel />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}
