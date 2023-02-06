import react from "react";
import { Text ,View,StyleSheet,Image} from "react-native";

const ImageDetail = ({imageSource,title,score}) => {
return (
    <View>
      <Image source={imageSource}/>
       <Text>{title}</Text>
       <Text>House - {score}</Text>
    </View>
);

};
const styles = StyleSheet.create({});

export default ImageDetail;