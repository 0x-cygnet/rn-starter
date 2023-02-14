import React from "react";
import { Text, StyleSheet,View,Button , TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
 
 return (
    <View>
 <Text style={styles.textHeading} >Welcome to Home Screen!!</Text>
<Button 
onPress={() => navigation.navigate('Components')}
title="Go to Components Demo"
 />
 <Button 
 title='Go to list demo'
 onPress={() => navigation.navigate('List')}
  />
  <Button 
  title='Go to Image Detail Screen'
  onPress={() => navigation.navigate('Image')}
   />
   <Button 
  title='Go to Counter Screen!!'
  onPress={() => navigation.navigate('Counter')}
   />
   <Button 
  title='Go to Color Screen!!'
  onPress={() => navigation.navigate('Color')}
   />
   <Button 
  title='Go to Color Square Screen!!'
  onPress={() => navigation.navigate('Square')}
   />
   <Button 
  title='Go to Workshop!!'
  onPress={() => navigation.navigate('Workshop')}
   />
    <Button 
  title='Go to TextScreen!!'
  onPress={() => navigation.navigate('Text')}
   />
     <Button 
  title='Go to Box Screen!!'
  onPress={() => navigation.navigate('Box')}
   />
{/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
    <Text>Go to list demo</Text>
</TouchableOpacity> */}
</View>
 );
 
};
const styles = StyleSheet.create({
   textHeading: {
    fontSize: 35
   }
})


export default HomeScreen;
