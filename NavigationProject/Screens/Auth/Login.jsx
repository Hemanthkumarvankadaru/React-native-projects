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

function Login({ setLoggedIn }) {
  const userName = "admin";
  const psw = "admin";

  const navigation = useNavigation();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');

  const handleSubmit = () => {
    console.log('Login submitted:', { username, password });
    if (username === userName && password === psw) {
      setLoggedIn(true);
    } else {
      console.log("Invalid Login credentials");
    }
  };

  const handleSignUp = () => navigation.navigate('SignUp');
  const handleForgotPassword = () => navigation.navigate('ForgetPassword');

  return (
    <View style={styles.safeArea}>
        <View style={styles.mainContent}>
          {/* Header Section */}
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to your account to continue</Text>
          </View>

          {/* Form Section */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="name@example.com"
                placeholderTextColor="#94A3B8"
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Password</Text>
                <TouchableOpacity onPress={handleForgotPassword}>
                  <Text style={styles.forgotText}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor="#94A3B8"
                autoCapitalize="none"
                style={styles.input}
                secureTextEntry
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding:25,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -20,
  },
  header: {
    marginBottom: 32,
  },
  title: {
   color: '#FF7F2A',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: {
     color: '#FF7F2A',
    fontSize: 15,
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: '#FF7F2A',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  forgotText: {
    color: '#334155', 
    fontSize: 14,
    fontWeight: '600',
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
    backgroundColor: '#FF7F2A',
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
  signUpButton: {
    paddingVertical: 4,
  },
  signUpText: {
    color: '#FF7F2A', 
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Login;
