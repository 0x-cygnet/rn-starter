import React from "react";
// Text is a primitive react element and is used to show basic content on the screen
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const name = "Zeb"
    const greeting = <Text style={styles.nameSize}>My name is {name}</Text>
    return (<View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        {greeting}
        </View>);
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameSize: {
        fontSize: 20
    }
});

export default ComponentsScreen;