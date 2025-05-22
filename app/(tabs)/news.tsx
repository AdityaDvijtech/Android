import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import api from '../../lib/api';
import type { News } from '../../lib/types';

export default function NewsScreen() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getNews();
      setNews(data);
    } catch (err) {
      console.error('Error loading news:', err);
      setError('Failed to load news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading news...</Text>
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
        {news.length > 0 ? (
          news.map((item) => (
            <LinearGradient key={item.id} colors={['#FFF7E0', '#FFD580']} style={styles.newsCard}>
              <Image source={{ uri: item.imageUrl }} style={styles.newsImage} />
              <View style={styles.newsContent}>
                <Text style={styles.newsDate}>
                  {new Date(item.createdAt).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </Text>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDescription}>{item.content}</Text>
              </View>
            </LinearGradient>
          ))
        ) : (
          <Text style={styles.noNews}>No news available</Text>
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
  newsCard: {
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#FFA751',
    shadowOpacity: 0.10,
    shadowRadius: 8,
  },
  newsImage: {
    width: '100%',
    height: 160,
  },
  newsContent: {
    padding: 16,
  },
  newsDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsDescription: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  noNews: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginTop: 24,
  },
}); 