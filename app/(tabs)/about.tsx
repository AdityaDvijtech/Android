import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF7E0' }}>
      <LinearGradient colors={['#FFE259', '#FFA751']} style={styles.profileSection}>
        <View style={styles.bannerContainer}>
          <Image 
            source={require('../../assets/images/banner.jpeg')} 
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.profileImageContainer}>
            <Image 
              source={require('../../assets/images/gopichand.jpg')} 
              style={styles.profileImage}
            />
          </View>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Gopichand Padalkar</Text>
          <Text style={styles.title}>Member of Parliament since 2019</Text>
        </View>
      </LinearGradient>

      {/* Biography Card */}
      <LinearGradient colors={['#FFF7E0', '#FFD580']} style={styles.card}>
        <Text style={styles.cardTitle}>Biography</Text>
        <Text style={styles.cardText}>
          Gopichand Padalkar has been serving the citizens for over 15 years. After completing his education in Public Administration, he started his political journey as a grassroots organizer. His dedication to public service and strong advocacy for rural development earned him recognition, eventually leading to his election as Member of Parliament.
        </Text>
        <Text style={[styles.cardText, styles.marginTop]}>
          Born and raised in a farming family, he understands the challenges faced by rural communities and has consistently worked to bridge the urban-rural divide through inclusive policies and development initiatives.
        </Text>
      </LinearGradient>

      {/* Vision & Mission Card */}
      <LinearGradient colors={['#FFF7E0', '#FFD580']} style={styles.card}>
        <Text style={styles.cardTitle}>Vision & Mission</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vision</Text>
          <Text style={styles.cardText}>
            To transform our constituency into a model of sustainable development, economic prosperity, and social harmony where every citizen has equal opportunities to grow and thrive.
          </Text>
        </View>
        <View style={[styles.section, styles.marginTop]}>
          <Text style={styles.sectionTitle}>Mission</Text>
          <Text style={styles.cardText}>
            To implement citizen-centric governance through transparent administration, innovative solutions to local challenges, and active participation of all stakeholders in the development process.
          </Text>
        </View>
      </LinearGradient>

      {/* Key Achievements Card */}
      <LinearGradient colors={['#FFF7E0', '#FFD580']} style={styles.card}>
        <Text style={styles.cardTitle}>Key Achievements</Text>
        <View style={styles.achievement}>
          <View style={styles.achievementIcon}>
            <Text style={styles.achievementEmoji}>🏆</Text>
          </View>
          <View style={styles.achievementContent}>
            <Text style={styles.achievementTitle}>Infrastructure Development</Text>
            <Text style={styles.achievementText}>Secured funding for 250km of rural roads connecting 60+ villages to main highways</Text>
          </View>
        </View>
        <View style={styles.achievement}>
          <View style={styles.achievementIcon}>
            <Text style={styles.achievementEmoji}>🏆</Text>
          </View>
          <View style={styles.achievementContent}>
            <Text style={styles.achievementTitle}>Education Initiative</Text>
            <Text style={styles.achievementText}>Established 15 digital classrooms in government schools benefiting over 5,000 students</Text>
          </View>
        </View>
        <View style={styles.achievement}>
          <View style={styles.achievementIcon}>
            <Text style={styles.achievementEmoji}>🏆</Text>
          </View>
          <View style={styles.achievementContent}>
            <Text style={styles.achievementTitle}>Healthcare Access</Text>
            <Text style={styles.achievementText}>Launched mobile health clinics serving 45 remote villages with essential healthcare services</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Recognition & Awards Card */}
      <LinearGradient colors={['#FFF7E0', '#FFD580']} style={styles.card}>
        <Text style={styles.cardTitle}>Recognition & Awards</Text>
        <View style={styles.award}>
          <View>
            <Text style={styles.awardTitle}>Excellence in Rural Development</Text>
            <Text style={styles.awardOrg}>National Rural Development Council</Text>
          </View>
          <Text style={styles.awardYear}>2022</Text>
        </View>
        <View style={styles.award}>
          <View>
            <Text style={styles.awardTitle}>Outstanding Parliamentarian Award</Text>
            <Text style={styles.awardOrg}>Parliamentary Affairs Committee</Text>
          </View>
          <Text style={styles.awardYear}>2021</Text>
        </View>
        <View style={styles.award}>
          <View>
            <Text style={styles.awardTitle}>Public Service Leadership Award</Text>
            <Text style={styles.awardOrg}>State Governance Foundation</Text>
          </View>
          <Text style={styles.awardYear}>2020</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E0',
  },
  profileSection: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
  },
  bannerContainer: {
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: 200,
  },
  profileImageContainer: {
    position: 'absolute',
    bottom: -40,
    left: '50%',
    marginLeft: -50,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileInfo: {
    marginTop: 50,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  title: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 18,
    elevation: 2,
    shadowColor: '#FFA751',
    shadowOpacity: 0.10,
    shadowRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  marginTop: {
    marginTop: 12,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#B45309',
    marginBottom: 4,
  },
  achievement: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  achievementIcon: {
    backgroundColor: '#FEF3C7',
    borderRadius: 20,
    padding: 8,
    marginRight: 12,
  },
  achievementEmoji: {
    fontSize: 20,
  },
  achievementContent: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  achievementText: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  award: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  awardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  awardOrg: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  awardYear: {
    fontSize: 14,
    color: '#6b7280',
  },
}); 