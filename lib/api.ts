import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance } from 'axios';
import type { Complaint, News as NewsType, Project } from './types';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface AuthResponse {
  user: User;
  token: string;
}

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'https://android-backend-x4xm.onrender.com';

console.log('API URL:', API_URL);

class ApiClient {
  private api: AxiosInstance;
  private token: string | null = null;

  constructor(baseURL: string = API_URL) {
    console.log('Initializing API client with baseURL:', baseURL);
    this.api = axios.create({
      baseURL,
      timeout: 10000,
      withCredentials: true,
    });

    this.api.interceptors.request.use(
      config => {
        console.log('Making request to:', `${config.baseURL}${config.url}`);
        console.log('Request method:', config.method);
        console.log('Request data:', config.data);
        console.log('Request headers:', config.headers);
        return config;
      },
      error => {
        console.error('Request error:', error);
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      response => {
        console.log('Response received:', {
          status: response.status,
          data: response.data,
          headers: response.headers
        });
        return response.data;
      },
      error => {
        if (error.code === 'ECONNABORTED') {
          console.error('Request timeout - server not responding');
        } else if (error.code === 'ERR_NETWORK') {
          console.error('Network error - could not connect to server. Please check if the server is running and the API URL is correct:', API_URL);
        } else {
          console.error('API Error:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
            config: {
              url: error.config?.url,
              method: error.config?.method,
              baseURL: error.config?.baseURL
            }
          });
        }
        return Promise.reject(error);
      }
    );

    this.loadToken();
  }

  private async loadToken() {
    try {
      this.token = await AsyncStorage.getItem('token');
    } catch (error) {
      console.error('Error loading token:', error);
    }
  }

  // Projects
  async getProjects(status?: string): Promise<Project[]> {
    const params = status ? { status } : undefined;
    return this.api.get('/api/projects', { params });
  }

  async getProject(id: number): Promise<Project> {
    return this.api.get(`/api/projects/${id}`);
  }

  // Complaints
  async getComplaints(status?: string): Promise<Complaint[]> {
    const params = status ? { status } : undefined;
    return this.api.get('/api/complaints', { params });
  }

  async createComplaint(data: FormData): Promise<Complaint> {
    return this.api.post('/api/complaints', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  // News/Media
  async getNews(): Promise<NewsType[]> {
    return this.api.get('/api/media', { params: { type: 'news' } });
  }

  // Media
  async uploadMedia(file: FormData): Promise<{ url: string }> {
    return this.api.post('/api/media', file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  async uploadComplaintAttachment(file: FormData): Promise<{ url: string }> {
    return this.api.post('/api/complaints/attachments', file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  // Events
  async getEvents(upcoming?: boolean): Promise<any[]> {
    const params = upcoming !== undefined ? { upcoming: upcoming.toString() } : undefined;
    return this.api.get('/api/events', { params });
  }

  // Admin
  async promoteToAdmin(userId: number): Promise<User> {
    return this.api.post(`/api/admin/promote/${userId}`);
  }

  // Auth methods
  async login(email: string, password: string): Promise<{ token: string }> {
    const response = await this.api.post<{ user: User }>('/api/auth/login', { email, password });
    // The token is set as a cookie by the backend, so we don't need to handle it here
    return { token: 'cookie' }; // Return a dummy token since it's handled by cookies
  }

  async register(userData: { 
    name: string; 
    email: string; 
    password: string;
    phone: string;
    confirmPassword: string;
  }): Promise<{ token: string }> {
    const response = await this.api.post<{ user: User }>('/api/auth/register', userData);
    // The token is set as a cookie by the backend, so we don't need to handle it here
    return { token: 'cookie' }; // Return a dummy token since it's handled by cookies
  }

  async logout(): Promise<void> {
    await this.api.post('/api/auth/logout');
    this.token = null;
    await AsyncStorage.removeItem('token');
  }

  async getCurrentUser(): Promise<User> {
    return this.api.get('/api/auth/user');
  }
}

export default new ApiClient(); 