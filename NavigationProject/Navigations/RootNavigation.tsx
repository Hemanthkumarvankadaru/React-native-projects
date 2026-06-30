import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <RootStack.Screen name="App">
          {() => (<DrawerNavigation setLoggedIn={setLoggedIn}/>)}
        </RootStack.Screen>
      ) : (
        <RootStack.Screen name="Auth">
          {() => (<AuthNavigation setLoggedIn={setLoggedIn} />)}
        </RootStack.Screen>
      )}
    </RootStack.Navigator>
  );
}