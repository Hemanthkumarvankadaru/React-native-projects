import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Home from './Home';
import SettingsScreen from '../Screens/Settings/SettingsScreen';
import Orders from '../Screens/Orders/Orders';
import WishList from '../Screens/WishList/WishList';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation({ setLoggedIn }: any) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerPressOpacity: 0.8,
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#003CB3',
        drawerType: 'front',
      }}
      //set out the logout screen
      drawerContent={ (props ) => <CustomDrawerContent {...props} setLoggedIn={setLoggedIn} />}
      backBehavior="initialRoute" 
      initialRouteName="Products"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="WishList" component={WishList} />
      <Drawer.Screen name="Setting" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

//custom components for logout
const CustomDrawerContent = ({ setLoggedIn, ...props }: any) => {
  console.log("Set Logged in", setLoggedIn);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <DrawerItem
        label="Log Out"
        onPress={() => setLoggedIn(false)}
      />
    </DrawerContentScrollView>
  );
};

