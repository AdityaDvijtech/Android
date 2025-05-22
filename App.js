import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
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
          <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('Complaints')}>
            <Text style={styles.quickLinkIcon}>📝</Text>
            <Text style={styles.quickLinkText}>Submit Complaint</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('Projects')}>
            <Text style={styles.quickLinkIcon}>🎯</Text>
            <Text style={styles.quickLinkText}>Ongoing Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('About')}>
            <Text style={styles.quickLinkIcon}>🏆</Text>
            <Text style={styles.quickLinkText}>Achievements</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickLink} onPress={() => navigation.navigate('Projects')}>
            <Text style={styles.quickLinkIcon}>📰</Text>
            <Text style={styles.quickLinkText}>Latest News</Text>
          </TouchableOpacity>
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
    fontWeight: '500',
    color: '#B45309',
  },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    gap: 12,
  },
  eventRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  eventDateBox: {
    backgroundColor: '#FEF3C7',
    borderRadius: 8,
    width: 44,
    alignItems: 'center',
    paddingVertical: 4,
    marginRight: 8,
  },
  eventMonth: {
    fontSize: 11,
    fontWeight: '600',
    color: '#B45309',
  },
  eventDay: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#B45309',
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
    color: '#888',
    fontSize: 13,
    marginTop: 8,
  },
});

function AboutScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'transparent' }}>
      {/* Banner and Profile */}
      <View style={aboutStyles.bannerContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600' }}
          style={aboutStyles.bannerImage}
        />
        <View style={aboutStyles.profileImageWrapper}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={aboutStyles.profileImage}
          />
        </View>
      </View>
      <View style={aboutStyles.nameSection}>
        <Text style={aboutStyles.name}>Gopichand Padalkar</Text>
        <Text style={aboutStyles.subtitle}>Member of Parliament since 2019</Text>
      </View>

      {/* Biography Card */}
      <View style={aboutStyles.card}>
        <Text style={aboutStyles.cardTitle}>Biography</Text>
        <Text style={aboutStyles.cardText}>
          Gopichand Padalkar has been serving the citizens for over 15 years. After completing his education in Public Administration, he started his political journey as a grassroots organizer. His dedication to public service and strong advocacy for rural development earned him recognition, eventually leading to his election as Member of Parliament.
        </Text>
        <Text style={[aboutStyles.cardText, { marginTop: 8 }]}>Born and raised in a farming family, he understands the challenges faced by rural communities and has consistently worked to bridge the urban-rural divide through inclusive policies and development initiatives.</Text>
      </View>

      {/* Vision & Mission Card */}
      <View style={aboutStyles.card}>
        <Text style={aboutStyles.cardTitle}>Vision & Mission</Text>
        <Text style={aboutStyles.sectionSubtitle}>Vision</Text>
        <Text style={aboutStyles.cardText}>
          To transform our constituency into a model of sustainable development, economic prosperity, and social harmony where every citizen has equal opportunities to grow and thrive.
        </Text>
        <Text style={[aboutStyles.sectionSubtitle, { marginTop: 12 }]}>Mission</Text>
        <Text style={aboutStyles.cardText}>
          To implement citizen-centric governance through transparent administration, innovative solutions to local challenges, and active participation of all stakeholders in the development process.
        </Text>
      </View>

      {/* Key Achievements Card */}
      <View style={aboutStyles.card}>
        <Text style={aboutStyles.cardTitle}>Key Achievements</Text>
        <View style={aboutStyles.achievementRow}>
          <Text style={aboutStyles.achievementIcon}>🏆</Text>
          <View style={{ flex: 1 }}>
            <Text style={aboutStyles.achievementTitle}>Infrastructure Development</Text>
            <Text style={aboutStyles.achievementDesc}>Secured funding for 250km of rural roads connecting 60+ villages to main highways</Text>
          </View>
        </View>
        <View style={aboutStyles.achievementRow}>
          <Text style={aboutStyles.achievementIcon}>🏆</Text>
          <View style={{ flex: 1 }}>
            <Text style={aboutStyles.achievementTitle}>Education Initiative</Text>
            <Text style={aboutStyles.achievementDesc}>Established 15 digital classrooms in government schools benefiting over 5,000 students</Text>
          </View>
        </View>
        <View style={aboutStyles.achievementRow}>
          <Text style={aboutStyles.achievementIcon}>🏆</Text>
          <View style={{ flex: 1 }}>
            <Text style={aboutStyles.achievementTitle}>Healthcare Access</Text>
            <Text style={aboutStyles.achievementDesc}>Launched mobile health clinics serving 45 remote villages with essential healthcare services</Text>
          </View>
        </View>
      </View>

      {/* Recognition & Awards Card */}
      <View style={aboutStyles.card}>
        <Text style={aboutStyles.cardTitle}>Recognition & Awards</Text>
        <View style={aboutStyles.awardRow}>
          <View>
            <Text style={aboutStyles.awardTitle}>Excellence in Rural Development</Text>
            <Text style={aboutStyles.awardDesc}>National Rural Development Council</Text>
          </View>
          <Text style={aboutStyles.awardYear}>2022</Text>
        </View>
        <View style={aboutStyles.awardRow}>
          <View>
            <Text style={aboutStyles.awardTitle}>Outstanding Parliamentarian Award</Text>
            <Text style={aboutStyles.awardDesc}>Parliamentary Affairs Committee</Text>
          </View>
          <Text style={aboutStyles.awardYear}>2021</Text>
        </View>
        <View style={aboutStyles.awardRow}>
          <View>
            <Text style={aboutStyles.awardTitle}>Public Service Leadership Award</Text>
            <Text style={aboutStyles.awardDesc}>State Governance Foundation</Text>
          </View>
          <Text style={aboutStyles.awardYear}>2020</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const aboutStyles = StyleSheet.create({
  bannerContainer: {
    position: 'relative',
    height: 180,
    marginBottom: 32,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  bannerImage: {
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  profileImageWrapper: {
    position: 'absolute',
    left: '50%',
    bottom: -40,
    transform: [{ translateX: -48 }],
    backgroundColor: '#fff',
    borderRadius: 999,
    padding: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#fff',
  },
  nameSection: {
    alignItems: 'center',
    marginTop: 56,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#B45309',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
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
    marginBottom: 10,
  },
  cardText: {
    fontSize: 13,
    color: '#444',
    lineHeight: 20,
  },
  sectionSubtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#B45309',
    marginTop: 8,
    marginBottom: 2,
  },
  achievementRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    gap: 10,
  },
  achievementIcon: {
    fontSize: 22,
    marginRight: 8,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  achievementDesc: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  awardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  awardTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  awardDesc: {
    fontSize: 12,
    color: '#666',
  },
  awardYear: {
    fontSize: 13,
    color: '#888',
    fontWeight: 'bold',
  },
});

function ProjectsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Projects Screen</Text>
    </View>
  );
}

function ComplaintsScreen() {
  // Simulate authentication and complaints data
  const isAuthenticated = false; // Change to true to show dashboard
  const [complaints, setComplaints] = React.useState([
    {
      id: 1,
      title: 'Water Supply Issue',
      description: 'There has been no water supply in our area for 3 days.',
      status: 'pending',
      createdAt: '2024-06-01T10:00:00Z',
      adminResponse: null,
    },
    {
      id: 2,
      title: 'Street Light Not Working',
      description: 'The main street light is not working for a week.',
      status: 'completed',
      createdAt: '2024-05-25T18:00:00Z',
      adminResponse: 'Issue resolved. Thank you for reporting.',
    },
  ]);

  // Helper for status badge
  const getStatusBadge = (status) => {
    if (status === 'pending') {
      return <Text style={[complaintsStyles.statusBadge, { backgroundColor: '#FEF3C7', color: '#B45309' }]}>Pending</Text>;
    } else if (status === 'in-progress') {
      return <Text style={[complaintsStyles.statusBadge, { backgroundColor: '#DBEAFE', color: '#2563EB' }]}>In Progress</Text>;
    } else {
      return <Text style={[complaintsStyles.statusBadge, { backgroundColor: '#D1FAE5', color: '#047857' }]}>Completed</Text>;
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'transparent' }}>
      <View style={{ padding: 16 }}>
        {/* Login Required Message */}
        {!isAuthenticated && (
          <View style={[complaintsStyles.card, { backgroundColor: '#FEF9C3', borderColor: '#FDE68A', borderWidth: 1 }]}> 
            <Text style={{ color: '#B45309', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>
              Please login to submit or track complaints
            </Text>
            <TouchableOpacity style={complaintsStyles.button}>
              <Text style={complaintsStyles.buttonText}>Login Now</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* User Complaints Dashboard */}
        {isAuthenticated && (
          <>
            {/* Complaint Submission Form (static) */}
            <View style={complaintsStyles.card}>
              <Text style={complaintsStyles.cardTitle}>Submit a New Complaint</Text>
              <View style={{ marginBottom: 12 }}>
                <Text style={complaintsStyles.label}>Title</Text>
                <View style={complaintsStyles.input} />
              </View>
              <View style={{ marginBottom: 12 }}>
                <Text style={complaintsStyles.label}>Category</Text>
                <View style={complaintsStyles.input} />
              </View>
              <View style={{ marginBottom: 12 }}>
                <Text style={complaintsStyles.label}>Description</Text>
                <View style={[complaintsStyles.input, { height: 60 }]} />
              </View>
              <View style={{ marginBottom: 12 }}>
                <Text style={complaintsStyles.label}>Location</Text>
                <View style={complaintsStyles.input} />
              </View>
              <TouchableOpacity style={complaintsStyles.button}>
                <Text style={complaintsStyles.buttonText}>Submit Complaint</Text>
              </TouchableOpacity>
            </View>

            {/* User Complaints List */}
            <View style={complaintsStyles.card}>
              <Text style={complaintsStyles.cardTitle}>Your Complaints</Text>
              {complaints.length > 0 ? complaints.map((complaint) => (
                <View key={complaint.id} style={complaintsStyles.complaintItem}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={complaintsStyles.complaintTitle}>{complaint.title}</Text>
                    {getStatusBadge(complaint.status)}
                  </View>
                  <Text style={complaintsStyles.complaintDesc}>{complaint.description}</Text>
                  {complaint.adminResponse && (
                    <View style={complaintsStyles.adminResponseBox}>
                      <Text style={complaintsStyles.adminResponseLabel}>Response:</Text>
                      <Text style={complaintsStyles.adminResponseText}>{complaint.adminResponse}</Text>
                    </View>
                  )}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                    <Text style={complaintsStyles.complaintDate}>{new Date(complaint.createdAt).toLocaleDateString()}</Text>
                    <TouchableOpacity>
                      <Text style={complaintsStyles.complaintDetailsBtn}>View Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )) : (
                <Text style={complaintsStyles.noComplaints}>You haven't submitted any complaints yet</Text>
              )}
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const complaintsStyles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
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
  label: {
    fontSize: 13,
    color: '#444',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    height: 36,
    marginBottom: 2,
  },
  button: {
    backgroundColor: '#F59E0B',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  complaintItem: {
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#FAFAFA',
  },
  complaintTitle: {
    fontSize: 15,
    fontWeight: '500',
  },
  complaintDesc: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  statusBadge: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  adminResponseBox: {
    backgroundColor: '#F3F4F6',
    borderRadius: 6,
    padding: 6,
    marginTop: 6,
  },
  adminResponseLabel: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#444',
  },
  adminResponseText: {
    fontSize: 12,
    color: '#666',
  },
  complaintDate: {
    fontSize: 11,
    color: '#888',
  },
  complaintDetailsBtn: {
    fontSize: 12,
    color: '#F59E0B',
    fontWeight: 'bold',
  },
  noComplaints: {
    textAlign: 'center',
    color: '#888',
    fontSize: 13,
    marginTop: 8,
  },
});

function AdminScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Admin Screen</Text>
    </View>
  );
}
function AuthScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Auth Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Complaints" component={ComplaintsScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 