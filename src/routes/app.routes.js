import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#171717'
        },
        drawerLabelStyle: {
          fontWeight: 'bold'
        },
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#00b94a',
        drawerInactiveBackgroundColor: '#000',
        drawerInactiveTintColor: '#DDD',
        drawerItemStyle: {
          marginVertical: 5,
        }
      }}
    >
      <AppDrawer.Screen
        name='Home'
        component={Home} options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name='Registrar'
        component={New}
        options={{ headerShown: false }}
      />
      <AppDrawer.Screen
        name='Perfil'
        component={Profile}
        options={{ headerShown: false }}
      />

    </AppDrawer.Navigator>
  );
};