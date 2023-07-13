import React from 'react'
import { Text, StyleSheet, View, Image} from "react-native";

export default function ListFreestyleWorkouts(){
    return(
        <View>
            <View style={{flexDirection: 'row', alignItems:'center', flex:1}}></View>
            <Image source={require('../../assets/images/Freestyle.jpg')} style={{width:55, height:55, borderRadius:10, marginRight: 8,}}/>
        </View>
    );
};