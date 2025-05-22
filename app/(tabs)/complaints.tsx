import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function ComplaintsScreen() {
  const [complaints, setComplaints] = useState([
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

  const getStatusBadge = (status: string) => {
    if (status === 'pending') {
      return <Text style={[styles.statusBadge, { backgroundColor: '#FEF3C7', color: '#B45309' }]}>Pending</Text>;
    } else if (status === 'in-progress') {
      return <Text style={[styles.statusBadge, { backgroundColor: '#DBEAFE', color: '#2563EB' }]}>In Progress</Text>;
    } else {
      return <Text style={[styles.statusBadge, { backgroundColor: '#D1FAE5', color: '#047857' }]}>Completed</Text>;
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'transparent' }}>
      <View style={{ padding: 16 }}>
        {/* Login Required Message */}
        <View style={[styles.card, { backgroundColor: '#FEF9C3', borderColor: '#FDE68A', borderWidth: 1 }]}> 
          <Text style={{ color: '#B45309', fontWeight: 'bold', marginBottom: 8, textAlign: 'center' }}>
            Please login to submit or track complaints
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login Now</Text>
          </TouchableOpacity>
        </View>

        {/* User Complaints List */}
        <View style={styles.card}>
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
          )) : (
            <Text style={styles.noComplaints}>You haven't submitted any complaints yet</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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