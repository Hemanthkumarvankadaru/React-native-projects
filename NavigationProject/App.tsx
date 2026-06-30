import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Navigations/RootNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
