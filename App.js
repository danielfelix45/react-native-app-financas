import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import firebase from './src/services/firebaseConnection';

LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#131313' barStyle='light-content' />
      <Routes />
    </NavigationContainer>
  );
}