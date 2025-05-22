import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function HomeScreen() {
  const { user } = useAuth();
  const [language, setLanguage] = useState('en');
  const { t, i18n } = useTranslation();

  const handleLanguageSwitch = () => {
    const newLang = language === 'en' ? 'mr' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF7E0' }}>
      {/* Language Switcher Button */}
      {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-end', padding: 12 }}>
        <Pressable onPress={handleLanguageSwitch} style={{ backgroundColor: '#FFD580', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 6 }}>
          <Text style={{ color: '#92400E', fontWeight: 'bold' }}>{language === 'en' ? 'मराठी' : 'English'}</Text>
        </Pressable>
      </View> */}
      {/* Gradient Top Section with Politician Image */}
      <LinearGradient
        colors={['#FFE259', '#FFA751']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientTop}
      >
        <View style={styles.topContent}>
          <LinearGradient
            colors={['#FFA751', '#FFE259']}
            style={styles.photoBadge}
          >
            <Image
              source={require('../../assets/images/gopichand.jpg')}
              style={styles.politicianImage}
            />
          </LinearGradient>
          <Text style={styles.welcomeTitle}>{t('welcome', { name: user?.name || t('friend') })}</Text>
          <Text style={styles.welcomeSubtitle}>{t('subtitle')}</Text>
        </View>
      </LinearGradient>

      {/* Stats Overview with Gradient Card */}
      <LinearGradient
        colors={['#FFF7E0', '#FFD580']}
        style={styles.card}
      >
        <Text style={styles.cardTitle}>Constituency Overview</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Active Projects</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>89%</Text>
            <Text style={styles.statLabel}>Approval Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1.2M</Text>
            <Text style={styles.statLabel}>Constituents</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>45</Text>
            <Text style={styles.statLabel}>Initiatives</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Quick Links with Gradient Card */}
      <LinearGradient
        colors={['#FFF7E0', '#FFD580']}
        style={styles.card}
      >
        <Text style={styles.cardTitle}>Quick Links</Text>
        <View style={styles.quickLinksGrid}>
          <Link href="/complaints" asChild>
            <Pressable style={({ pressed }) => [styles.quickLink, pressed && { backgroundColor: '#FFE259', transform: [{ scale: 0.97 }] }] }>
              <Text style={styles.quickLinkIcon}>📝</Text>
              <Text style={styles.quickLinkText}>Submit Complaint</Text>
            </Pressable>
          </Link>
          <Link href="/projects" asChild>
            <Pressable style={({ pressed }) => [styles.quickLink, pressed && { backgroundColor: '#FFE259', transform: [{ scale: 0.97 }] }] }>
              <Text style={styles.quickLinkIcon}>🎯</Text>
              <Text style={styles.quickLinkText}>Ongoing Projects</Text>
            </Pressable>
          </Link>
          <Link href="/about" asChild>
            <Pressable style={({ pressed }) => [styles.quickLink, pressed && { backgroundColor: '#FFE259', transform: [{ scale: 0.97 }] }] }>
              <Text style={styles.quickLinkIcon}>🏆</Text>
              <Text style={styles.quickLinkText}>Achievements</Text>
            </Pressable>
          </Link>
          <Link href="/news" asChild>
            <Pressable style={({ pressed }) => [styles.quickLink, pressed && { backgroundColor: '#FFE259', transform: [{ scale: 0.97 }] }] }>
              <Text style={styles.quickLinkIcon}>📰</Text>
              <Text style={styles.quickLinkText}>Latest News</Text>
            </Pressable>
          </Link>
        </View>
      </LinearGradient>

      {/* Recent Activities with Gradient Card */}
      <LinearGradient
        colors={['#FFF7E0', '#FFD580']}
        style={styles.card}
      >
        <Text style={styles.cardTitle}>Recent Activities</Text>
        <View style={styles.activityList}>
          <View style={styles.activityItem}>
            <Text style={styles.activityDate}>Today</Text>
            <Text style={styles.activityText}>Inaugurated new community center in Sector 5</Text>
          </View>
          <View style={styles.activityItem}>
            <Text style={styles.activityDate}>Yesterday</Text>
            <Text style={styles.activityText}>Attended education summit at City Hall</Text>
          </View>
          <View style={styles.activityItem}>
            <Text style={styles.activityDate}>2 days ago</Text>
            <Text style={styles.activityText}>Launched new healthcare initiative</Text>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gradientTop: {
    paddingBottom: 12,
    paddingTop: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    marginBottom: 8,
    elevation: 4,
    shadowColor: '#FFA751',
    shadowOpacity: 0.18,
    shadowRadius: 12,
    position: 'relative',
  },
  topContent: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  photoBadge: {
    padding: 4,
    borderRadius: 70,
    marginBottom: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFA751',
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  politicianImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#FFF7E0',
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#B45309',
    marginBottom: 2,
    marginTop: 2,
    textAlign: 'center',
  },
  welcomeSubtitle: {
    fontSize: 15,
    color: '#92400E',
    marginBottom: 2,
    textAlign: 'center',
  },
  card: {
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
    marginHorizontal: 10,
    elevation: 2,
    shadowColor: '#FFA751',
    shadowOpacity: 0.10,
    shadowRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#92400E',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  statItem: {
    width: '48%',
    backgroundColor: '#FFE259',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#92400E',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 13,
    color: '#78350F',
    textAlign: 'center',
  },
  quickLinksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  quickLink: {
    width: '48%',
    backgroundColor: '#FFE259',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 18,
    marginBottom: 8,
    shadowColor: '#FFA751',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
  },
  quickLinkIcon: {
    fontSize: 28,
    marginBottom: 4,
    color: '#92400E',
  },
  quickLinkText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#78350F',
    textAlign: 'center',
  },
  activityList: {
    gap: 8,
  },
  activityItem: {
    backgroundColor: '#FFE259',
    borderRadius: 10,
    padding: 12,
  },
  activityDate: {
    fontSize: 11,
    color: '#92400E',
    marginBottom: 2,
  },
  activityText: {
    fontSize: 13,
    color: '#78350F',
    fontWeight: '500',
  },
}); 