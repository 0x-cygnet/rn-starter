import React from "react";
import { Text, StyleSheet, View } from "react-native";

//NOTE: "() => {};" and "function() {};" are both equally valid options, and do the same thing
const ComponentsScreen = () => {
  //if we want to refer to variables inside of our JSX, put them inside {} (eg. <Text>{greeting}</Text>)
  const greeting = "Hi There!";
  const numbers = 123;

  //arrays appear oddly, without any spacing between them by default
  //so this will appear as "123456"
  const numArray = [123, 456];
  //and this will appear as "stringarray"
  const stringArray = ["string", "array"];

  //The only thing we can't show in a Text tag is a Js object {}
  //if you try, they'll cause an error
  const obby = { colour: "red" };

  //you CAN however, create the JSX element as a variable, then display the variable
  const led = <Text>I'm an element!</Text>;

  //This is how we display JSX (HTML equivalent).
  //this also shows how we add CSS/stylesheets to a text element (attributes are called "Props")
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text>{greeting}</Text>
      <Text>{numbers}</Text>
      <Text>{numArray}</Text>
      <Text>{stringArray}</Text>
      {/* <Text>{obby}</Text> */}
      {led}
    </View>
  );
  //NOTE: if the stylesheet has a bad property, it'll return a nice error

  //alternate way of doing styling:
  // return <Text style={{fontSize: 30}}>This is the components screen</Text>;
  //NOTE: if the styling has a bad property, it just won't apply & will return a warning instead
};

//this is how we create stylesheets for the screen above
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

//This is REQUIRED to be able to call this component elsewhere in the project
export default ComponentsScreen;
