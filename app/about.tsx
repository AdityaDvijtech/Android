import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'transparent' }}>
      {/* Banner and Profile */}
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600' }}
          style={styles.bannerImage}
        />
        <View style={styles.profileImageWrapper}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            style={styles.profileImage}
          />
        </View>
      </View>
      <View style={styles.nameSection}>
        <Text style={styles.name}>Gopichand Padalkar</Text>
        <Text style={styles.subtitle}>Member of Parliament since 2019</Text>
      </View>

      {/* Biography Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Biography</Text>
        <Text style={styles.cardText}>
          Gopichand Padalkar has been serving the citizens for over 15 years. After completing his education in Public Administration, he started his political journey as a grassroots organizer. His dedication to public service and strong advocacy for rural development earned him recognition, eventually leading to his election as Member of Parliament.
        </Text>
        <Text style={[styles.cardText, { marginTop: 8 }]}>Born and raised in a farming family, he understands the challenges faced by rural communities and has consistently worked to bridge the urban-rural divide through inclusive policies and development initiatives.</Text>
      </View>

      {/* Vision & Mission Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Vision & Mission</Text>
        <Text style={styles.sectionSubtitle}>Vision</Text>
        <Text style={styles.cardText}>
          To transform our constituency into a model of sustainable development, economic prosperity, and social harmony where every citizen has equal opportunities to grow and thrive.
        </Text>
        <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>Mission</Text>
        <Text style={styles.cardText}>
          To implement citizen-centric governance through transparent administration, innovative solutions to local challenges, and active participation of all stakeholders in the development process.
        </Text>
      </View>

      {/* Key Achievements Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Key Achievements</Text>
        <View style={styles.achievementRow}>
          <Text style={styles.achievementIcon}>🏆</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.achievementTitle}>Infrastructure Development</Text>
            <Text style={styles.achievementDesc}>Secured funding for 250km of rural roads connecting 60+ villages to main highways</Text>
          </View>
        </View>
        <View style={styles.achievementRow}>
          <Text style={styles.achievementIcon}>🏆</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.achievementTitle}>Education Initiative</Text>
            <Text style={styles.achievementDesc}>Established 15 digital classrooms in government schools benefiting over 5,000 students</Text>
          </View>
        </View>
        <View style={styles.achievementRow}>
          <Text style={styles.achievementIcon}>🏆</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.achievementTitle}>Healthcare Access</Text>
            <Text style={styles.achievementDesc}>Launched mobile health clinics serving 45 remote villages with essential healthcare services</Text>
          </View>
        </View>
      </View>

      {/* Recognition & Awards Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Recognition & Awards</Text>
        <View style={styles.awardRow}>
          <View>
            <Text style={styles.awardTitle}>Excellence in Rural Development</Text>
            <Text style={styles.awardDesc}>National Rural Development Council</Text>
          </View>
          <Text style={styles.awardYear}>2022</Text>
        </View>
        <View style={styles.awardRow}>
          <View>
            <Text style={styles.awardTitle}>Outstanding Parliamentarian Award</Text>
            <Text style={styles.awardDesc}>Parliamentary Affairs Committee</Text>
          </View>
          <Text style={styles.awardYear}>2021</Text>
        </View>
        <View style={styles.awardRow}>
          <View>
            <Text style={styles.awardTitle}>Public Service Leadership Award</Text>
            <Text style={styles.awardDesc}>State Governance Foundation</Text>
          </View>
          <Text style={styles.awardYear}>2020</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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