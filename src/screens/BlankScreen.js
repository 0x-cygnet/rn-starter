import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BlankScreen = () => {
    return (
    <View>
        <Text style={styles.header}>Header</Text>
        <Text>Some text...</Text>
    </View>
    );
};

const styles = StyleSheet.create({
});

export default BlankScreen;
