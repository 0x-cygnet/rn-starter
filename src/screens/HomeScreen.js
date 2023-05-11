import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//putting "props" as an input allows us to access all other props on load
//(needed for redirection among other things)
//we can also replace "props" (since it's assumed by default) with "{navigation}" to only bring
//the navigation object
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Bluegrass Homescreen</Text>
      <Button
        title={"Go to Components Demo"}
        //To add navigation to another page, we can call props.navigation.navigate("name from app.js")
        onPress={() => navigation.navigate("Components")}
      />

      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};
//ON BUTTONS:
//Buttons appear slightly different depending on if you're on android or iphone
//Buttons are self-closing
//onPress = onclick

//ON TOUCHABLEOPACITY
//no stylization by default - it just appears like normal text
//will flash briefly when clicked, so the user has some feedback
//you can include one or many of just about any type of element inside of a TouchableOpacity element

//ON Console.log
//console.log appears in the cmd prompt/terminal window

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

//NOTE: app.js in main folder is where we decide which screens are visible from where
