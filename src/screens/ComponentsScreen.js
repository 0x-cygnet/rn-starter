import React from 'react'; //library that use for get all functionality of the differents components in general
import { View ,Text, StyleSheet } from 'react-native'; //this one only is get it what is in brackets and is for using how use those components at movil

//Construction of a component
const ComponentsScreen = () => { // or = function() {}
    const name = 'Mayra'

    return (
        <View>
            <Text style={styles.titleStyle}>Getting stared with react native!</Text>
            <Text style={styles.subHeadStyle}>My name is {name}</Text>
        </View>        
    ); 
}

//StyleSheet
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 45
    },
    subHeadStyle: {
        fontSize: 20
    }
})

//Export the component to use in any where else at the project
export default ComponentsScreen;