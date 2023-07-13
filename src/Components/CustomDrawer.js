import React, {useContext} from "react";
import {View, Text, ImageBackground, Image, TouchableOpacity,} from 'react-native';
import {colors} from '../constants/theme';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from "../context/AuthContext";

const CustomDrawer =(props) => {
    const {logout} = useContext(AuthContext);
    return (
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: colors.primary}}>
        <ImageBackground source={require('../../assets/images/profile-background.png')} style={{padding:20}}>
        <Image source={require('../../assets/images/profile-pic.jpeg')} style={{height:80, width:80, borderRadius:40, marginBottom:10}}/>
        <Text style={{color:'#fff', fontSize: 18,}}>Yanel Pinto</Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor:'#fff', paddingTop: 10, fontSize: 18,}}>
            <DrawerItemList {...props} />
            </View>
        </DrawerContentScrollView>
        <View style={{padding: 20, borderTopWidth: 1, borderTopColor:'#ccc',}}>
        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Ionicons name= "share-outline"  size={22}/>
            <Text style={{fontSize: 15, marginLeft: 5}}>Compartir</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{logout()}} style={{paddingVertical:15}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Ionicons name= "exit-outline"  size={22}/>
            <Text style={{fontSize: 15, marginLeft: 5}}>Cerrar Sesion</Text>
            </View>
            </TouchableOpacity>
        </View>
        </View>
    );
};

export default CustomDrawer;