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
       { name.length < 4 ? <Text>Name must be 4 characters</Text> : null}
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
