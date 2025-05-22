import AsyncStorage from '@react-native-async-storage/async-storage';

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

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  status: 'ongoing' | 'completed' | 'planned';
  createdAt: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl?: string;
}

export interface Complaint {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: string;
  adminResponse?: string;
}

export interface News {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
}

class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor() {
    this.baseUrl = 'http://192.168.1.100:3000';
    this.loadToken();
  }

  private async loadToken() {
    try {
      this.token = await AsyncStorage.getItem('auth_token');
    } catch (error) {
      console.error('Error loading auth token:', error);
    }
  }

  private async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        ...headers,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  // Auth methods
  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await this.fetch<AuthResponse>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });

    if (response.token) {
      this.token = response.token;
      await AsyncStorage.setItem('auth_token', response.token);
    }

    return response;
  }

  async register(name: string, email: string, password: string): Promise<AuthResponse> {
    const response = await this.fetch<AuthResponse>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });

    if (response.token) {
      this.token = response.token;
      await AsyncStorage.setItem('auth_token', response.token);
    }

    return response;
  }

  async logout(): Promise<void> {
    this.token = null;
    await AsyncStorage.removeItem('auth_token');
  }

  async getCurrentUser(): Promise<User> {
    return this.fetch<User>('/api/auth/me');
  }

  // Projects
  async getProjects(): Promise<Project[]> {
    return this.fetch<Project[]>('/api/projects');
  }

  async getProject(id: number): Promise<Project> {
    return this.fetch<Project>(`/api/projects/${id}`);
  }

  // Events
  async getEvents(upcoming: boolean = true): Promise<Event[]> {
    return this.fetch<Event[]>(`/api/events?upcoming=${upcoming}`);
  }

  async getEvent(id: number): Promise<Event> {
    return this.fetch<Event>(`/api/events/${id}`);
  }

  // Complaints
  async getComplaints(): Promise<Complaint[]> {
    return this.fetch<Complaint[]>('/api/complaints');
  }

  async createComplaint(data: Omit<Complaint, 'id' | 'createdAt' | 'status'>): Promise<Complaint> {
    return this.fetch<Complaint>('/api/complaints', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async getComplaint(id: number): Promise<Complaint> {
    return this.fetch<Complaint>(`/api/complaints/${id}`);
  }

  // News
  async getNews(): Promise<News[]> {
    return this.fetch<News[]>('/api/news');
  }

  async getNewsItem(id: number): Promise<News> {
    return this.fetch<News>(`/api/news/${id}`);
  }
}

export const api = new ApiClient(); 