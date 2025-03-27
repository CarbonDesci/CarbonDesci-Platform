import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
  register: (userData: { email: string; password: string; name: string }) =>
    api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
};

export const proposalAPI = {
  getAll: () => api.get('/proposals'),
  getById: (id: string) => api.get(`/proposals/${id}`),
  create: (data: any) => api.post('/proposals', data),
  update: (id: string, data: any) => api.put(`/proposals/${id}`, data),
  delete: (id: string) => api.delete(`/proposals/${id}`),
};

export const dataAPI = {
  upload: (formData: FormData) => api.post('/data/upload', formData),
  getAll: () => api.get('/data'),
  getById: (id: string) => api.get(`/data/${id}`),
};

export const profileAPI = {
  getProfile: () => api.get('/profile'),
  updateProfile: (data: any) => api.put('/profile', data),
};

export default api; 