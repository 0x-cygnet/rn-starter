import React from "react";
import { View, Image, ImageBackground, Text, StyleSheet, Button, TouchableOpacity } from "react-native";


const HomeScreen = ( {navigation} ) => {

  const {navigate} = navigation 

  const logo = require('./../images/logo-md.png');
  const bgImage = require('./../images/purple-bg.jpg');
  return (
    <View style={styles.mainView}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.header}>3D Names</Text>
        <Text style={styles.textPara1}>Welcome to 3D Names... this is a new App with over 10,000,000 wallpapers to search from. Yep that's 10 million wallpapers... if we don't have your name then please go complain to your parents!</Text>
        {/* <Button 
          onPress={onPress1}
          color="#f194ff"
          title="List"/> */}

        <TouchableOpacity style={styles.button} onPress={ () => navigate('List') }>
          <Text style={styles.btnText}>List Screen</Text>
        </TouchableOpacity>  
        
        <TouchableOpacity style={styles.button} onPress={ () => navigate('Blank') }>
          <Text style={styles.btnText}>Blank Screen</Text>
        </TouchableOpacity>  
        
        <TouchableOpacity style={styles.button} onPress={ () => navigate('Images') }>
          <Text style={styles.btnText}>Images Screen</Text>
        </TouchableOpacity>  

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView : {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: '5%',
    fontWeight : 'bold',
    color: 'white',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#7c4fe0",
    padding: 10,
    marginBottom: '1%',
    textDecorationColor : 'white'
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    justifyContent: "center",
    textAlign: "center",
  },
  textPara1 : {
    color: 'white',
    marginBottom: '5%',
  },
  logo : {
    width: '100%',
    resizeMode : 'contain',
  }
});

export default HomeScreen;
