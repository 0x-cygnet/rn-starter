import React from 'react'
import { View, Button, SafeAreaView, StyleSheet, ImageBackground  } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { 
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple, 
} from 'react-native-paper';


const PerfilScreen =() => {
  return(
    <SafeAreaView style={styles.container}>
    <View style ={styles.userInfoSection}>
      <View style = {{flexDirection: 'row', marginTop: 15}}>
        <ImageBackground 
        source={require('../../assets/images/profile-pic.jpeg')}
        style={{ width: 80, height: 80}}
        imageStyle={{borderRadius: 75}}/>
        <View style ={{marginLeft: 20}}>
          <Title style = {[styles.title, {
            marginTop: 15,
            marginBottom: 5,
          }]}> Yanel Pinto</Title>
          <Caption style ={ styles.caption}> @YanelPinto</Caption>
        </View>
      </View>
      </View>

    <View style={styles.userInfoSection}>
    <View style={styles.row}>
    <Ionicons name = "ios-location-sharp" color= "#004b6b" size={20}/>
    <Text style={{color: "#004b6b", marginLeft: 20, marginTop:1, }}>Austin, Texas</Text>
    </View>
    <View style={styles.row}>
    <Ionicons name = "ios-phone-portrait-outline" color= "#004b6b" size={20}/>
    <Text style={{color: "#004b6b", marginLeft: 20, marginTop:1, }}>+1 555-555-5555</Text>
    </View>
    <View style={styles.row}>
    <Ionicons name = "ios-mail-outline" color= "#004b6b" size={20}/>
    <Text style={{color: "#004b6b", marginLeft: 20, marginTop:1, }}>testing@gmail.com</Text>
    </View>
    </View>
    <View style={styles.infoBoxWrapper}> 
    <View style= {styles.infoBox}>
    <Title>2.0</Title>
    <Caption>Km</Caption>
    </View>
    <View style= {styles.infoBox}>
    <Title>2</Title>
    <Caption>Entrenamientos</Caption>
    </View>
    <View style= {styles.infoBox}>
    <Title>0.6</Title>
    <Caption>Horas</Caption>
    </View>
    </View>
    <TouchableRipple onPress={() => {}}>
      <View style={styles.workoutItem}> 
      <Ionicons name= "ios-heart-outline" color="#ff0159" size={25} />
      <Text style={styles.workoutItemText}>Favoritos</Text>
      </View>
    </TouchableRipple>
    <TouchableRipple onPress={() => {}}>
      <View style={styles.workoutItem}> 
      <Ionicons name= "share-outline" color="#ff0159" size={25} />
      <Text style={styles.workoutItemText}>Compartir</Text>
      </View>
    </TouchableRipple>
    <TouchableRipple onPress={() => {}}>
      <View style={styles.workoutItem}> 
      <Ionicons name= "people-outline" color="#ff0159" size={25} />
      <Text style={styles.workoutItemText}>Soporte</Text>
      </View>
    </TouchableRipple>
    <TouchableRipple onPress={() => {}}>
      <View style={styles.workoutItem}> 
      <Ionicons name= "settings-outline" color="#ff0159" size={25} />
      <Text style={styles.workoutItemText}>Ajustes</Text>
      </View>
    </TouchableRipple>
    </SafeAreaView>
  );
};

export default PerfilScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
title: {
  fontSize: 24,
  fontWeight: '500',
},
caption: {
  fontSize: 14,
  lineHeight: 14,
  fontWeight: '500',
},
row: {
  flexDirection: 'row',
  marginBottom: 10,
},
infoBoxWrapper: {
  borderBottomColor: '#dddddd',
  borderBottomWidth: 1,
  borderTopColor: '#dddddd',
  borderTopWidth: 1,
  flexDirection: 'row',
  height: 100,
},
infoBox: {
  width: '33%',
  alignItems: 'center',
  justifyContent: 'center',
},
menuWrapper: {
  marginTop: 10,
},
workoutItem: {
  flexDirection: 'row',
  paddingVertical: 15,
  paddingHorizontal: 30,
},
workoutItemText: {
  color: '#777777',
  marginLeft: 20,
  fontWeight: '600',
  fontSize: 16,
  lineHeight: 26,
},
});