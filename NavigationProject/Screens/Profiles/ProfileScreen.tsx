import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

function ProfileScreen() {
  const navigation = useNavigation();

  // 1. Data configuration
  const user = {
    name: 'name',
    email: 'email@example.com',
    status: 'Active',
    dob: '1995-12-04',
    address: '123 Luxury Ave, New York, NY',
    memberSince: 'June 2026',
  };

  // 2. Row display definition
  const displayRows = [
    { label: 'Status', value: user.status },
    { label: 'Date of Birth', value: user.dob },
    { label: 'Home Address', value: user.address },
    { label: 'Membership', value: user.memberSince },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Profile Avatar Header */}
        <View style={styles.headerSection}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>NAME</Text>
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>

        {/* Account Details Section */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Account Overview</Text>
          
          {displayRows.map((item, index) => (
            <View key={index}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>{item.label}</Text>
                <Text style={styles.infoValue} numberOfLines={2}>{item.value}</Text>
              </View>
              
            </View>
          ))}
        </View>

        {/* Action Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('EditProfileScreen',{user})}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC', 
    paddingHorizontal: 24,
    paddingTop: 50, // Replaces SafeAreaView to clear the status bar
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#FFEFE3', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#FF7F2A', 
  },
  avatarText: {
    color: '#FF7F2A',
    fontSize: 32,
    fontWeight: '700',
  },
  userName: {
    color: '#0F172A', 
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  userEmail: {
    color: '#64748B', 
    fontSize: 14,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingTop: 20,
    marginBottom: 32,
    shadowColor: '#0F172A',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  cardTitle: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  infoLabel: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  infoValue: {
    color: '#334155',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
    flex: 2,
    paddingLeft: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    width: '100%',
  },
  button: {
    height: 50,
    backgroundColor: '#FF7F2A', 
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24, // Keeps spacing clear from screen bottom
    shadowColor: '#FF7F2A',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ProfileScreen;
