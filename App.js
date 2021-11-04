import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';

const Main = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Main.Navigator>
       <Main.Screen 
       name='Login'
       component={Login}/>
       <Main.Screen 
       name='Home'
       component={HomeScreen}/>
     </Main.Navigator>
   </NavigationContainer>
  );
}


