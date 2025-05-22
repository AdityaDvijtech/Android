import { useEffect, useState } from 'react';
import api from '../lib/api';
import { Project } from '../lib/types';

export function useProjects(status?: string) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    api.get('/api/projects', { params: status ? { status } : {} })
      .then(res => setProjects(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [status]);

  return { projects, loading, error };
} 