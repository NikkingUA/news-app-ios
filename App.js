import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';




// import Header from './src/components/Header';
import HomePage from './src/components/Home';
import News from './src/components/News';
import Contact from './src/components/Contact';

export default function App() {

  const Tab = createBottomTabNavigator();


  const admin = true;

  return (


    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="News" component={News} />
        {admin && <Tab.Screen name="Dashboard" component={News} />}
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>



  )
}


const styles = StyleSheet.create({
  container: {
    height: 710,
    backgroundColor: 'black'
  }
});
