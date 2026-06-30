import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screens/Cart/Cart';
import PaymentScreen from '../Screens/Cart/PaymentScreen';

const Stack = createNativeStackNavigator();

const CardStack = () => {
    
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  )
}

export default CardStack