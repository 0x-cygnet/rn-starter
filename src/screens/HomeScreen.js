import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// you could desctructure {navigation} object from the prop parent 
const HomeScreen = (props) => {
  
  {/* 
    TouchableOpacity has a native onPress fase in and out.
    <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> 
  */}

  return (
    <View>
      <Text style={styles.text}>HOME</Text>
      <Button 
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo" 
      />
      <Button 
        onPress={() => props.navigation.navigate('List')}
        title="Go to List Demo" 
      />
      <Button 
        onPress={() => props.navigation.navigate('Image')}
        title="Go to Screen Demo" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
