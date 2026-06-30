import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screens/Auth/Login';
import ForgetPassword from '../Screens/Auth/ForgetPassword';
import SignUp from '../Screens/Auth/SignUp';

const Stack = createNativeStackNavigator();

const AuthNavigation = ({ setLoggedIn }:any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login">
        {(props) => (
          <Login
            {...props}
            setLoggedIn={setLoggedIn}
          />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;