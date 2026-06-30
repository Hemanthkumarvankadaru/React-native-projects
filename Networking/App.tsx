import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './screens/SearchScreen';
import DetailScreen from './screens/DetailScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="SearchScreen" 
          component={SearchScreen}
          options={{ title: 'User Details' }}
        />
        <Stack.Screen 
          name="DetailScreen" 
          component={DetailScreen}
          options={{ title: 'Cart Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}