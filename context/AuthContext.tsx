import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import api from '../lib/api';
import { User } from '../lib/types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Checking initial auth state...');
    api.getCurrentUser()
      .then(user => {
        console.log('Auth check successful:', user);
        setUser(user);
      })
      .catch(err => {
        console.error('Auth check failed:', err.message);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    console.log('Attempting login...');
    try {
      await api.login(email, password);
      const user = await api.getCurrentUser();
      console.log('User data fetched:', user);
      setUser(user);
    } catch (error: any) {
      console.error('Login failed:', error.message);
      throw error;
    }
  };

  const logout = async () => {
    console.log('Logging out...');
    try {
      await api.logout();
      console.log('Logout successful');
      setUser(null);
    } catch (error: any) {
      console.error('Logout failed:', error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 