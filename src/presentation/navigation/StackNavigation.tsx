import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {RegisterScreen} from '../screens/auth/RegisterScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {LoadingScreen} from '../screens/loading/LoadingScreen';
import {ProductScreen} from '../screens/product/ProductScreen';

const Stack = createStackNavigator();

export type RootStackParams = {
  LoadingScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  HomeScreen: undefined;
  ProductScreen: {productId: string};
};

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};
