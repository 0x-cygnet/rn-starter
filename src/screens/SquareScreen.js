import React, {useReducer} from "react";
import { View,Text,StyleSheet } from "react-native";
import ColorCounter from "./ColorCounter";
const COLOR_INCREMENT = 15;
const reducer = (state, action) => {

}

const SquareScreen = () => {
   const [state, dispatch] = useReducer(reducer,{red:0,green:0,blue:0})
   
    return(
        <View>
     <ColorCounter 
     onIncrease={() => }
     onDecrease={() => }
     color="Red"
      />
     <ColorCounter 
     color="Blue"
     onIncrease={() => }
     onDecrease={() => }
      />
     <ColorCounter 
     color="Green" 
     onIncrease={() => }
     onDecrease={() => }

     />
     <View style={{ height:150,width:150,backgroundColor:`rgb(${red},${green},${blue})`}} />
        </View>
    );
     
};

const styles = StyleSheet.create({});

export default SquareScreen;
