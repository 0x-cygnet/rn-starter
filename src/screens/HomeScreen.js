import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity,} from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sliderData } from '../data/HomeSliderData';
import BannerSlider from '../Components/BannerSlider';
import {windowWidth} from '../../utils/Dimensions';
import ListFreestyleWorkouts from '../data/ListFreestyleWorkouts';

export default function HomeScreen({navigation}){
  const renderBanner =({item, index}) => {
return <BannerSlider data={item}/>
  }
  return(
    <SafeAreaView style = {{Flex:1, ImageBackground: '#fff'}}>
      <ScrollView style={{padding:20,}}>
      <View style={{
        flexDirection:'row',  
        justifyContent: 'space-between', 
        marginBottom: 20,}}>
        <Text style={{fontSize: 16,}}>Hola Yanel</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <ImageBackground source={require('../../assets/images/profile-pic.jpeg')}
        style={{ width: 35, height: 35}}
        imageStyle={{borderRadius: 25}}/>
        </TouchableOpacity> 
   </View>
   <View style={{
    flexDirection: 'row', 
    borderColor: '#004b6b', 
    borderWidth:1, 
    borderRadius: 8,
    paddingVertical: 8,
    }}>
   <Ionicons name= 'ios-search' size={20} color='#004b6b' style={{marginRight: 5,}}/>
    <TextInput placeholder="Busqueda"/>
   </View>
   <View style={{
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
   }}>
    <Text style={{fontSize:18,}}>Agregados Recientemente</Text>
    <TouchableOpacity onPress={() => {} }>
      <Text style={{color:'#004b6b'}}>Ver más</Text>
    </TouchableOpacity>
   </View>
   <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
