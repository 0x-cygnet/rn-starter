import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../rn-starter/src/screens/HomeScreen';
import EntrenaminetosScreen from '../rn-starter/src/screens/EntrenamientosScreen';
import PerfilScreen from '../rn-starter/src/screens/PerfilScreen';
import {colors} from '../rn-starter/src/constants/theme';


const Tab = createBottomTabNavigator();

const TopMenuNavigator = () =>{

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: colors.primary,
            height: 90,
          },
          tabBarIcon: ({ focused, size, color, }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Entrenamientos') {
              iconName = focused ? 'fitness' : 'fitness-outline';
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

        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Entrenamientos' component={EntrenaminetosScreen} />
        <Tab.Screen name='Perfil' component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TopMenuNavigator;