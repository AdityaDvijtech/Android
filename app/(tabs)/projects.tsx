import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import api from '../../lib/api';
import type { Project } from '../../lib/types';

export default function ProjectsScreen() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getProjects();
      setProjects(data);
    } catch (err) {
      console.error('Error loading projects:', err);
      setError('Failed to load projects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading projects...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF7E0' }}>
      <View style={{ padding: 16 }}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <LinearGradient key={project.id} colors={['#FFF7E0', '#FFD580']} style={styles.projectCard}>
              <Image source={{ uri: project.imageUrl }} style={styles.projectImage} />
              <View style={styles.projectContent}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectDescription}>{project.description}</Text>
                <View style={styles.projectStatus}>
                  <Text style={[
                    styles.statusBadge,
                    { backgroundColor: project.status === 'completed' ? '#D1FAE5' : project.status === 'ongoing' ? '#DBEAFE' : '#FEF3C7' }
                  ]}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </Text>
                  <Text style={styles.completionText}>Completion: {project.completion}%</Text>
                </View>
              </View>
            </LinearGradient>
          ))
        ) : (
          <Text style={styles.noProjects}>No projects available</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    color: '#ef4444',
    textAlign: 'center',
  },
  projectCard: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  projectImage: {
    width: '100%',
    height: 160,
  },
  projectContent: {
    padding: 16,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  projectStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 'bold',
  },
  completionText: {
    fontSize: 12,
    color: '#666',
  },
  noProjects: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginTop: 24,
  },
}); 