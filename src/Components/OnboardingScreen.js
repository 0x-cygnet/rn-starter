import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants/theme'; 


const OnboardingScreen =({navigation}) => {
    return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
    }}>
      <View>
        <Image source={require('../../assets/images/full-logo-yellow.png')}
     style = {{ width: 250, height: 150, marginTop: 50, }}
     />
      </View>
  
      <View>
        <Text style={{fontWeight:'400', fontSize:18, color:'#fff', paddingLeft: 20, paddingRight: 20, paddingTop: 80, paddingBottom: 200, textAlign:'center',}}>Como nadadora olímpica, he pasado innumerables horas en la piscina, perfeccionando mi técnica y superando mis límites. He aprendido lo que funciona y lo que no cuando se trata de entrenamientos, y estoy emocionada de compartir mis conocimientos contigo.</Text>
      </View>
      <TouchableOpacity 
      style={{
        backgroundColor: colors.third, 
        padding: 20, width:'90%', 
        borderRadius: 5, 
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginBottom: 50,}}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{fontWeight: 'bold', fontSize:18, color: colors.primary,}}>Empezemos</Text>
        <Ionicons name= 'chevron-forward' size={22} color='#004b6b'/>
      </TouchableOpacity>
   </SafeAreaView>
    );
  };
  export default OnboardingScreen;