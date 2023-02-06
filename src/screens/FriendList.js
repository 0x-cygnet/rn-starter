import react from "react";
import { Text,FlatList,StyleSheet } from "react-native";

const FriendList = () => {
const friendListArray = [
    {name:"Friend1",age:21},
    {name:"Friend2",age:22},
    {name:"Friend3",age:34}
]
 return (
    <FlatList 
    data={friendListArray}
    renderItem={({item}) => {
    return <Text style={styles.textStyle}>
        {item.name}-Age{item.age}
        </Text>
    }}
    >

    </FlatList>
 );
 
 
};
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 44
    }
   });

export default FriendList;