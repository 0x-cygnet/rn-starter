import React, {useContext} from 'react'
import { Text,  View,  ImageBackground, SafeAreaView, TextInput, TouchableOpacity} from "react-native";
import {colors} from '../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

const LoginScreen =({navigation}) => {
    const {login} = useContext(AuthContext);
    return(
     <SafeAreaView style ={{flex: 1, justifyContent:'center', backgroundColor: colors.primary}}>
     <View style={{paddingHorizontal:25}}>
     <View style={{alignItems: 'center'}}>
    <ImageBackground source={require('../../assets/images/icon-white.png')}
        style={{ width: 100, height: 100}}/>
        <Text style={{color: '#fff', fontSize: 16}}>Vive una experiencia Olímpica!</Text>
     </View>
      <Text style={{fontSize:28, fontWeight:'600', color:'#fff', marginTop: 30, marginBottom:30}}>Iniciar Sesion</Text>
   
      <View style={{flexDirection:'row', borderBottomColor: '#fff', borderBottomWidth:1, paddingBottom:8, marginBottom:25}}>
      <Ionicons name = "ios-mail-outline" color= "#fff" size={20} style={{ marginRight:5}}/>
      <TextInput placeholder="Correo" style={{flex:1, paddingVertical:0}} keyboardType="email-address"/>
      </View>
      <View style={{flexDirection:'row', borderBottomColor: '#fff', borderBottomWidth:1, paddingBottom:8, marginBottom:25}}>
      <Ionicons name = "ios-lock-closed-outline" color= "#fff" size={20} style={{ marginRight:5}}/>
      <TextInput placeholder="Contraseña" style={{flex:1, paddingVertical:0}} secureTextEntry={true}/>
      <TouchableOpacity >
      <Text style={{color: colors.secondary, fontWeight: '700'}}>¿Olvidaste?</Text>
     </TouchableOpacity>
 </View>
      <TouchableOpacity onPress={() => {login()}} style={{backgroundColor: colors.lightBlue, padding:20, borderRadius:10, marginBottom:30}}> 
      <Text style={{textAlign:'center', fontWeight:'700', fontSize:16, color:'#fff'}}>Iniciar Sesion</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 30}}>
      <Text style={{color: '#fff'}}>¿No tienes una cuenta?</Text>
      <TouchableOpacity onPress={() =>  navigation.navigate('Registrate')}>
      <Text style={{color: colors.lightBlue, fontWeight:'700'}}> Registrarme</Text>
      </TouchableOpacity>
</View>
</View>
     </SafeAreaView>
    );
};


     export default LoginScreen;