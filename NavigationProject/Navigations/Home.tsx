import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../Screens/Home/Products';
import Categories from '../Screens/Home/Categories';
import ProfileStack from './ProfileStack';
import CardStack from './CardStack';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen
        name="Categories"
        component={Categories}
      />
      <Tab.Screen
        name="Cart"
        component={CardStack}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
      />

    </Tab.Navigator>
  );
}
