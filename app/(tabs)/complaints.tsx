import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import api from '../../lib/api';
import type { Complaint } from '../../lib/types';

export default function ComplaintsScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const loadComplaints = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getComplaints();
      setComplaints(data);
    } catch (err) {
      setError('Failed to load complaints. Please try again later.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Pull-to-refresh handler
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadComplaints();
  }, []);

  // Auto-refresh when screen is focused
  useFocusEffect(
    useCallback(() => {
      loadComplaints();
    }, [])
  );

  const getStatusBadge = (status: string) => {
    if (status === 'pending') {
      return <Text style={[styles.statusBadge, { backgroundColor: '#FEF3C7', color: '#B45309' }]}>Pending</Text>;
    } else if (status === 'in-progress') {
      return <Text style={[styles.statusBadge, { backgroundColor: '#DBEAFE', color: '#2563EB' }]}>In Progress</Text>;
    } else {
      return <Text style={[styles.statusBadge, { backgroundColor: '#D1FAE5', color: '#047857' }]}>Completed</Text>;
    }
  };

  if (loading && !refreshing) {
    return (
      <View style={styles.centerContainer}>
        <Text>Loading complaints...</Text>
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
    <ScrollView
      style={{ flex: 1, backgroundColor: '#FFF7E0' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {user && (
        <TouchableOpacity
          style={styles.submitNewButton}
          onPress={() => router.push('./ComplaintFormScreen')}
        >
          <Text style={styles.submitNewButtonText}>Submit New Complaint</Text>
        </TouchableOpacity>
      )}
      <View style={{ padding: 16 }}>
        <LinearGradient colors={['#FFF7E0', '#FFD580']} style={styles.card}>
          <Text style={styles.cardTitle}>Your Complaints</Text>
          {complaints.length > 0 ? complaints.map((complaint) => (
            <View key={complaint.id} style={styles.complaintItem}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.complaintTitle}>{complaint.title}</Text>
                {getStatusBadge(complaint.status)}
              </View>
              <Text style={styles.complaintDesc}>{complaint.description}</Text>
              {complaint.adminResponse && (
                <View style={styles.adminResponseBox}>
                  <Text style={styles.adminResponseLabel}>Response:</Text>
                  <Text style={styles.adminResponseText}>{complaint.adminResponse}</Text>
                </View>
              )}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }}>
                <Text style={styles.complaintDate}>{new Date(complaint.createdAt).toLocaleDateString()}</Text>
                <TouchableOpacity>
                  <Text style={styles.complaintDetailsBtn}>View Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          )) :
            <Text style={styles.noComplaints}>You haven't submitted any complaints yet</Text>
          }
        </LinearGradient>
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
  submitNewButton: {
    backgroundColor: '#F59E0B',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    margin: 16,
    marginBottom: 0,
  },
  submitNewButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#FFA751',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  complaintItem: {
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
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