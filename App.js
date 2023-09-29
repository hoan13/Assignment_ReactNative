import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import HomeScreen from './HomeScreen';
import PhotoScreen from './PhotoScreen';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Button } from 'react-native';

import ProfileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MovieScreen from './MovieScreen';




const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />

        <Stack.Screen name="Profile" component={ProfileScreen} />

        <Stack.Screen name="MovieScreen" component={MovieScreen} />
        <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


