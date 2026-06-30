import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../Screens/Profiles/ProfileScreen';
import EditProfileScreen from '../Screens/Profiles/EditProfileScreen';

const ProfileStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    >
        <Stack.Screen 
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
                headerShown :false,
            }}
        
        />
        <Stack.Screen
            name='EditProfileScreen'
            component={EditProfileScreen}
        />
    </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})