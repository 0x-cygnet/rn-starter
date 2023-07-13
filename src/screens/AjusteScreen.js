import React from 'react'
import { Text, View } from "react-native";


export default function AjusteScreen({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text
    onPress={() => alert ('This is the HomeScreen.')}
    style ={{fontSize: 26, fontWeight: 'Bold'}}>Ajustes</Text>
  </View>
  );
}