import React, {useState} from "react";
import { Text ,View , StyleSheet,Button} from "react-native";

const CounterScreen = () => {
 const [counter, setCounter] = useState(0);
   return (
      <View>
      <Button title="Increase" onPress={() => {
         setCounter(counter+1);
         console.log(counter);
      }} />
      <Button title="Decrease" onPress={() => {
      setCounter(counter-1);
      console.log(counter)
      }}/>
    <Text> Result{counter}</Text>
    </View>
   );
};

const styles = StyleSheet.create({});
export default CounterScreen;