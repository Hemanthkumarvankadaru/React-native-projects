import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Account Profile</Text>
          <Text style={styles.cardSubtitle}>Manage your personal information</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Notifications</Text>
          <Text style={styles.cardSubtitle}>Configure alerts and updates</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  headerText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FCFCFC',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666666',
  },
});
