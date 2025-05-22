import { Link } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  // Static data for demonstration
  const projects = [
    {
      id: 1,
      title: 'Rural Roads Initiative',
      description: 'Secured funding for 250km of rural roads connecting 60+ villages to main highways.',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    },
    {
      id: 2,
      title: 'Digital Classrooms',
      description: 'Established 15 digital classrooms in government schools benefiting over 5,000 students.',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    },
  ];
  const events = [
    {
      id: 1,
      title: 'Constituency Meet',
      location: 'Village Hall',
      date: '2024-06-10T18:00:00Z',
    },
    {
      id: 2,
      title: 'Health Camp',
      location: 'Community Center',
      date: '2024-06-15T10:00:00Z',
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'transparent' }}>
      {/* Hero Banner */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Gopichand Padalkar</Text>
          <Text style={styles.heroSubtitle}>Member of Parliament - Working for your future</Text>
        </View>
      </View>

      {/* Latest Updates */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Latest Updates</Text>
        {projects.map((project) => (
          <View key={project.id} style={styles.projectRow}>
            <Image source={{ uri: project.imageUrl }} style={styles.projectImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDesc}>{project.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Quick Links */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick Links</Text>
        <View style={styles.quickLinksGrid}>
          <Link href="/complaints" asChild>
            <TouchableOpacity style={styles.quickLink}>
              <Text style={styles.quickLinkIcon}>📝</Text>
              <Text style={styles.quickLinkText}>Submit Complaint</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/projects" asChild>
            <TouchableOpacity style={styles.quickLink}>
              <Text style={styles.quickLinkIcon}>🎯</Text>
              <Text style={styles.quickLinkText}>Ongoing Projects</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/about" asChild>
            <TouchableOpacity style={styles.quickLink}>
              <Text style={styles.quickLinkIcon}>🏆</Text>
              <Text style={styles.quickLinkText}>Achievements</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/news" asChild>
            <TouchableOpacity style={styles.quickLink}>
              <Text style={styles.quickLinkIcon}>📰</Text>
              <Text style={styles.quickLinkText}>Latest News</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Upcoming Events */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Upcoming Events</Text>
        {events.length > 0 ? events.map((event, idx) => (
          <View key={event.id} style={[styles.eventRow, idx < events.length - 1 && styles.eventRowBorder]}> 
            <View style={styles.eventDateBox}>
              <Text style={styles.eventMonth}>{new Date(event.date).toLocaleString('default', { month: 'short' }).toUpperCase()}</Text>
              <Text style={styles.eventDay}>{new Date(event.date).getDate()}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDesc}>{event.location}, {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
            </View>
          </View>
        )) : (
          <Text style={styles.noEvents}>No upcoming events</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    position: 'relative',
    height: 200,
    marginBottom: 24,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  heroOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  heroSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  projectRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    gap: 12,
  },
  projectImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  projectTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  projectDesc: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  quickLinksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
  quickLink: {
    width: '48%',
    backgroundColor: '#FFF7E0',
    borderRadius: 10,
    alignItems: 'center',
    padding: 14,
    marginBottom: 8,
  },
  quickLinkIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  quickLinkText: {
    fontSize: 12,
    textAlign: 'center',
  },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  eventRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  eventDateBox: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF7E0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  eventMonth: {
    fontSize: 10,
    fontWeight: '600',
    color: '#666',
  },
  eventDay: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  eventDesc: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  noEvents: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
}); 