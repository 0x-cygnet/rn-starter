import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import EntrenamientosScreen from '../screens/EntrenamientosScreen';
import {colors} from '../constants/theme';
import SupportScreen from '../screens/SupportScreen';




const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Soporte"
        component={SupportScreen}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
   
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.primary,
            height: 90,
          },
          tabBarIcon: ({ focused, size, color, }) => {
            let iconName;
            if (route.name === 'Inicio') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Entrenamientos') {
              iconName = focused ? 'ios-stopwatch' : 'ios-stopwatch-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.secondary,
          inactiveTintColor: colors.lightBlue,
        }}>
      <Tab.Screen name="Inicio" component={HomeStack} />
      <Tab.Screen name="Entrenamientos" component={EntrenamientosScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
   
  );
};
export default TabNavigator;