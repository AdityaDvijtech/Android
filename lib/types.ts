export interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  status: 'planned' | 'ongoing' | 'completed';
  completion: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Complaint {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  userId: number;
  adminResponse?: string;
  attachments?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface News {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  createdAt: string;
  updatedAt: string;
}

export interface Media {
  id: string;
  url: string;
  type: string;
  createdAt: string;
} 