import React from 'react';
import { View } from "react-native";
import { createStackNavigator } from 'react-navigation';
import RegistrationScreen from 'screens/consumer/RegistrationC';

const AppStackNavigator = createStackNavigator({
  Registration: {
    screen: RegistrationScreen
  }
})

export default AppStackNavigator;
