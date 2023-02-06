import react from "react";
import { Text ,View,StyleSheet} from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
return (
<View>
<ImageDetail title="forest" 
imageSource={require('../../assets/forest.jpg')}
score={1507}
/>
<ImageDetail title="Beach" 
imageSource={require('../../assets/beach.jpg')}
score={1477}
/>
<ImageDetail  title="Mountain" 
imageSource={require('../../assets/mountain.jpg')}
score={1498}
/>
</View>
);
};
const styles = StyleSheet.create({});

export default ImageScreen;