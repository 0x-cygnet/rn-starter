import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from './../components/imageDetail';

const ImagesScreen = () => {
    const logo = './../images/logo-md.png';
    return (
    <View>
        <Text style={styles.header}>Image Screen</Text>
        <Text>Some images for ya...</Text>
        <ImageDetail/>
        <ImageDetail/>
        <ImageDetail/>
    </View>
    );
};

const styles = StyleSheet.create({
});

export default ImagesScreen;
