import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login/Login';
import Signup from './Screens/Signup/Signup';
import Routes from './Routes';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

export default function App() {
  return (

     <Routes />  
  
  );
}

AppRegistry.registerComponent('R', () => App)