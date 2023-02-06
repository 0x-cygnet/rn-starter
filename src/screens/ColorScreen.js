import react,{useState} from "react";
import { Text,View,StyleSheet,Button,SafeAreaView,FlatList } from "react-native";


const ColorScreen = () => {
    const [colors,setColor] = useState([]);
    console.log(colors);
   return (
    <View>
       <Button
       title="Add Color!!!"
       onPress={() => {
       setColor([...colors,randomRgb()])
       }
    }
       />
         <SafeAreaView style={styles.textStyle}>
       <FlatList 
       keyExtractor={item => item}
       data={colors}
       renderItem={({item}) => {
          return  <View 
          style = {{height:100,width:100,backgroundColor:item}}
         />
       }}
       />
       </SafeAreaView>
      
    </View>
   );

};
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}
const styles = StyleSheet.create({
    textStyle:{
        marginVertical:0
    }
});
export default ColorScreen;