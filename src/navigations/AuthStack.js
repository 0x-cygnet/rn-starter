import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../Components/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
     );
    };
    
     export default AuthStack;