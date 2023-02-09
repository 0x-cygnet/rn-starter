import React, {useReducer} from "react";
import { Text ,View , StyleSheet,Button} from "react-native";
const reducer = (state, action) => {
   // state === {counter:number}
   // action === {type: 'increment' || 'decrement',payload:1}
   switch(action.type){
      case 'increment':
         return {...state,counter:state.counter + action.payload};
      case 'decrement':
         return {...state, counter:state.counter - action.payload};
      default:
         return state;     
   }
}
const WorkShop1 = () => {
 const [state, runMyReducer] = useReducer(reducer,{counter:0})
   return (
      <View>
      <Button title="Increase" onPress={() => {
         runMyReducer({type:'increment',payload:1})
      }} />
      <Button title="Decrease" onPress={() => {
      runMyReducer({type:'decrement',payload:1})
      }}/>
    <Text> Result{state.counter}</Text>
    </View>
   );
};

const styles = StyleSheet.create({});
export default WorkShop1;