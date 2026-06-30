import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';

function ForgetPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleResetSubmit = () => {
    // Implement password recovery logic here
    console.log('Sending recovery link to:', email);
  };

  const handleBackToLogin = () => {
    navigation.navigate('Login'); // Adjust to match your Login route name
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.mainContent}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>
              Enter your email address and we'll send you a link to reset your password.
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="name@example.com"
                placeholderTextColor="#94A3B8"
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleResetSubmit}>
              <Text style={styles.buttonText}>Send Reset Link</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Remember your password?</Text>
          <TouchableOpacity onPress={handleBackToLogin} style={styles.loginButton}>
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -40,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    color: '#0F172A',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    color: '#64748B',
    fontSize: 15,
    lineHeight: 22,
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    color: '#334155',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    color: '#0F172A',
    fontSize: 15,
  },
  button: {
    height: 50,
    backgroundColor: '#FF7F2A', // Vibrant orange action button
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    gap: 4,
  },
  footerText: {
    color: '#64748B',
    fontSize: 14,
  },
  loginButton: {
    paddingVertical: 4,
  },
  loginText: {
    color: '#FF7F2A',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ForgetPassword;
