import React from 'react'
import AjusteScreen from '../screens/AjusteScreen';
import SupportScreen from '../screens/SupportScreen';
import CustomDrawer from '../Components/CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/theme';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigator from './TabNavigator';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();


const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{
      drawerActiveBackgroundColor: colors.primary,
      drawerActiveTintColor: colors.secondary,
      drawerInactiveTintColor: colors.lightBlue,
      drawerLabelStyle:{
        marginLeft: -25, 
        fontSize:15,
        },
    }}>
    <Drawer.Screen name="Home" component={TabNavigator} options={{
      headerShown: false,
      drawerIcon: ({color})=>(
        <Ionicons name='ios-home' size={22} color={color}/>
      )
    }}/>
    <Drawer.Screen name="Soporte" component={SupportScreen} options={{
      drawerIcon: ({color})=>(
        <Ionicons name='people-outline' size={22} color={color}/>
      )
    }}/>
    <Drawer.Screen name="Ajustes" component={AjusteScreen} options={{
      drawerIcon: ({color})=>(
        <Ionicons name='settings-outline' size={22} color={color}/>
      )
    }}/>
      </Drawer.Navigator>
     );
    };
    
     export default AppStack;
     