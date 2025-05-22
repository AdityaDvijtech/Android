import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function NewsScreen() {
  const news = [
    {
      id: 1,
      title: 'New Healthcare Center Inaugurated',
      description: 'A state-of-the-art healthcare center was inaugurated in the rural area, providing essential medical services to over 10,000 residents.',
      date: '2024-06-01',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    },
    {
      id: 2,
      title: 'Digital Education Initiative Launched',
      description: 'The constituency launched a new digital education initiative, providing tablets and internet connectivity to 20 government schools.',
      date: '2024-05-28',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    },
    {
      id: 3,
      title: 'Road Development Project Completed',
      description: 'The major road development project connecting five villages to the main highway has been successfully completed ahead of schedule.',
      date: '2024-05-25',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ padding: 16 }}>
        {news.map((item) => (
          <View key={item.id} style={styles.newsCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.newsImage} />
            <View style={styles.newsContent}>
              <Text style={styles.newsDate}>{new Date(item.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</Text>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  newsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
}); 