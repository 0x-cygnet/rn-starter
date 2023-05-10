import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}>Bluegrass Homescreen</Text>;
  //the "Text" element is a primitive element provided by the react library (line 1)

  //Common types of "primative" elements (elements provided by the React library):
  //TEXT - show text to the user. any text placed OUTSIDE of a "Text" will cause an error
  //VIEW - general purpose element used to group other elements, or for styling (span/div?)
  //IMAGE - show an image
  //BUTTON - show a button the user can press. gives feedback whenever user presses it


  //JSX (eg: "return <Text>blah</Text>;") gets converted by babel into regular javascript to 
  //be displayed (you can see it working at babeljs.io)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


//NOTE: app.js in main folder is where we decide which screens are visible from where