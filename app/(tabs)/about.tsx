import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/icon.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>About Our App</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.text}>
          We are dedicated to improving community engagement and development through
          transparent project tracking and efficient complaint management. Our platform
          connects citizens with local development initiatives and provides a direct
          channel for addressing community concerns.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Features</Text>
        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>• Project Tracking</Text>
          <Text style={styles.text}>
            Monitor ongoing development projects in your area with real-time updates
            and progress tracking.
          </Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>• Complaint Management</Text>
          <Text style={styles.text}>
            Submit and track complaints about local issues with a streamlined
            resolution process.
          </Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureTitle}>• Community Updates</Text>
          <Text style={styles.text}>
            Stay informed about important announcements and news affecting your
            community.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.text}>
          For any questions or support, please reach out to us at:
          {'\n'}support@communityapp.com
          {'\n\n'}Phone: +1 (555) 123-4567
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F59E0B',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  section: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  featureItem: {
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
}); 