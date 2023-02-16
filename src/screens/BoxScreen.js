import React from "react";
import { Text,View,StyleSheet } from "react-native";

const BoxScreen = () => {
 return <View style={styles.viewStyle}>
    <Text style={styles.textStyle}> Child #1 </Text>
    <Text style={styles.textStyleTwo}> Child #2 </Text>
    <Text style={styles.textStyleThree}> Child #3</Text>

 </View>
};


const styles = StyleSheet.create({
 viewStyle: {
   borderWidth: 3,
   borderColor:'black',
   height:200,

 },
 textStyle: {
   borderWidth:2,
   borderColor:'red'
   },
 textStyleTwo: {
  borderWidth:2,
  borderColor:'yellow',
  ...StyleSheet.absoluteFillObject

},
textStyleThree: {
  borderWidth:2,
  borderColor:'green'
}
});

export default BoxScreen;