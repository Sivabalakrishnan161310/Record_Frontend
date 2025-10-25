import axios from 'axios';

// Base API URL
const API_URL = import.meta.env.VITE_API_URL || 'https://record-backend-6hiu.onrender.com/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API endpoints
export const authAPI = {
  signup: (data) => api.post('/auth/signup', data),
  login: (data) => api.post('/auth/login', data),
  googleAuth: (credential) => api.post('/auth/google', { credential }),
  verifyToken: (token) => api.post('/auth/verify', { token }),
  getProfile: () => api.get('/auth/profile')
};

// Support API endpoints
export const supportAPI = {
  create: (data) => api.post('/support', data),
  getByEmail: (email) => api.get(`/support/email/${email}`)
};

export default api;