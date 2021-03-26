import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Users from './pages/users';
import Search from './pages/search';
import { CONSTANT } from './service/config';
import Details from './pages/users/details';

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName={CONSTANT.SCREEN_SEARCH} 
        drawerPosition="right">
        <Drawer.Screen name={CONSTANT.SCREEN_USER} component={Users} options={{
          drawerLabel: 'User'
        }}/>
        <Drawer.Screen name={CONSTANT.SCREEN_SEARCH} component={Search} options={{ 
          headerShown: false, 
          drawerLabel: 'Search'
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}