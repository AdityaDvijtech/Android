import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function ProjectsScreen() {
  const projects = [
    {
      id: 1,
      title: 'Rural Roads Initiative',
      description: 'Secured funding for 250km of rural roads connecting 60+ villages to main highways.',
      status: 'In Progress',
      completion: '75%',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    },
    {
      id: 2,
      title: 'Digital Classrooms',
      description: 'Established 15 digital classrooms in government schools benefiting over 5,000 students.',
      status: 'Completed',
      completion: '100%',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    },
    {
      id: 3,
      title: 'Healthcare Centers',
      description: 'Setting up 5 new healthcare centers in remote areas.',
      status: 'Planning',
      completion: '25%',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <View style={{ padding: 16 }}>
        {projects.map((project) => (
          <View key={project.id} style={styles.projectCard}>
            <Image source={{ uri: project.imageUrl }} style={styles.projectImage} />
            <View style={styles.projectContent}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
              <View style={styles.projectStatus}>
                <Text style={[
                  styles.statusBadge,
                  { backgroundColor: project.status === 'Completed' ? '#D1FAE5' : project.status === 'In Progress' ? '#DBEAFE' : '#FEF3C7' }
                ]}>
                  {project.status}
                </Text>
                <Text style={styles.completionText}>Completion: {project.completion}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  projectImage: {
    width: '100%',
    height: 160,
  },
  projectContent: {
    padding: 16,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  projectStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 'bold',
  },
  completionText: {
    fontSize: 12,
    color: '#666',
  },
}); 