import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PerfilScreen from "../screens/PerfilScreen";
import EditProfileScreen from "../screens/EditProfileScreen";


const ProfileStack = createStackNavigator();

const ProfileStackScreen = ({navigation}) => {

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: 'black', // iOS
          elevation: 0, // Android
        },
        headerTintColor: '#000',
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={PerfilScreen}
        options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Ionicons
                name="reorder-three-outline"
                size={25}
                backgroundColor= "#000"
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <Ionicons
                name="ellipsis-vertical"
                size={25}
                backgroundColor={colors.background}
                color={colors.text}
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
