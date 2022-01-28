import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash,Home, WelcomeAuth} from '../pages'

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
      <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
