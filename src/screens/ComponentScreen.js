import React from "react";
import { Text, StyleSheet ,View} from "react-native";

const ComponentsScreen = () => {
  const greetings = "My name is Akshay Kumar"
  const jsxElements = <Text>Assign JSX elements to a  js variable</Text>
  return <View>
<Text style={styles.textStyle}>Getting started with React Native!!!.</Text>
 <Text style= {styles.subHeaderStyle}>{greetings}</Text>
 {jsxElements}
  </View>
 
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize : 45
  },
  subHeaderStyle: {
    fontSize : 20
  }
});

export default ComponentsScreen;