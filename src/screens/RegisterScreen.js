import React from 'react'
import { Text,  View,  ImageBackground, SafeAreaView, TextInput, TouchableOpacity} from "react-native";
import {colors} from '../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';



const   RegisterScreen =({navigation}) => {
    return(
     <SafeAreaView style ={{flex: 1, justifyContent:'center', backgroundColor: colors.primary}}>
     <View style={{paddingHorizontal:25}}>
     <View style={{alignItems: 'center'}}>
    <ImageBackground source={require('../../assets/images/white-full-logo.png')}
        style={{ width: 250, height: 75}}/>
     </View>
      <Text style={{fontSize:28, fontWeight:'600', color:'#fff', marginTop: 30, marginBottom:30}}>Registrarme</Text>
      <View style={{flexDirection:'row', borderBottomColor: '#fff', borderBottomWidth:1, paddingBottom:8, marginBottom:25}}>
      <Ionicons name = "ios-person-outline" color= "#fff" size={20} style={{ marginRight:5}}/>
      <TextInput placeholder="Nombre y Apellido" style={{flex:1, paddingVertical:0}} keyboardType="email-address"/>
      </View>
      <View style={{flexDirection:'row', borderBottomColor: '#fff', borderBottomWidth:1, paddingBottom:8, marginBottom:25}}>
      <Ionicons name = "ios-mail-outline" color= "#fff" size={20} style={{ marginRight:5}}/>
      <TextInput placeholder="Correo" style={{flex:1, paddingVertical:0}} keyboardType="email-address"/>
      </View>
      <View style={{flexDirection:'row', borderBottomColor: '#fff', borderBottomWidth:1, paddingBottom:8, marginBottom:25}}>
      <Ionicons name = "ios-lock-closed-outline" color= "#fff" size={20} style={{ marginRight:5}}/>
      <TextInput placeholder="Contraseña" style={{flex:1, paddingVertical:0}} secureTextEntry={true}/>
 </View>
      <TouchableOpacity style={{backgroundColor: colors.lightBlue, padding:20, borderRadius:10, marginBottom:30}}> 
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color:'#fff'}}>Registrarme</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 30}}>
      <Text style={{color: '#fff'}}>¿Ya tienes una cuenta?</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={{color: colors.lightBlue, fontWeight:'700'}}> Iniciar Sesion</Text>
      </TouchableOpacity>
</View>
</View>
     </SafeAreaView>
    );
};


     export default RegisterScreen;