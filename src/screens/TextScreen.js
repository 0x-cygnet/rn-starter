import React, { useState } from "react";
import {Text, View , StyleSheet,TextInput} from "react-native";

const TextScreen = () => {
  const [name, setName] = useState('');
    return (
        <View>
        <Text>Enter Name:</Text>
       <TextInput 
       style={styles.input}
       autoCapitalize="none"
       autoCorrect={false}
       value={name}
       onChangeText={newValue => setName(newValue)}
       />
      <Text>My Name: {name}</Text>

      </View>
     );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;
