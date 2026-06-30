import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { user }:any = route.params || {};

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [dob, setDob] = useState(user?.dob || '');
  const [address, setAddress] = useState(user?.address || '');

  const handleSaveChanges = () => {
    const updatedUserData = { name, email, dob, address, status: user?.status, memberSince: user?.memberSince };
    console.log('Saving profile modification entries:', updatedUserData);
    Alert.alert("Saving profile modification entries,successfully");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Input Forms Structure Card Card */}
        <View style={styles.formCard}>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="John Doe"
              placeholderTextColor="#94A3B8"
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="name@example.com"
              placeholderTextColor="#94A3B8"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              value={dob}
              onChangeText={setDob}
              placeholder="YYYY-MM-DD"
              placeholderTextColor="#94A3B8"
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Home Address</Text>
            <TextInput
              value={address}
              onChangeText={setAddress}
              placeholder="123 Luxury Ave, New York"
              placeholderTextColor="#94A3B8"
              style={[styles.input, styles.multilineInput]}
              multiline
              numberOfLines={3}
            />
          </View>

        </View>

        {/* Form CTA Submission Button */}
        <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 24,

  },
  header: {
    marginBottom: 28,
  },
  title: {
    color: '#0F172A',
    fontSize: 26,
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  subtitle: {
    color: '#64748B',
    fontSize: 14,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 10,
    marginBottom: 32,
    shadowColor: '#0F172A',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 2,
    marginTop:25,
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    color: '#334155',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    color: '#0F172A',
    fontSize: 15,
  },
  multilineInput: {
    height: 80,
    paddingTop: 12,
    textAlignVertical: 'top', // Prevents placeholder alignment problems on Android devices
  },
  button: {
    height: 50,
    backgroundColor: '#FF7F2A',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
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

export default EditProfileScreen;
