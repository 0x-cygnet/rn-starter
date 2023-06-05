import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
//images go in the "assets" folder

const ImageDetail = ({ imageSource, title, imageScore }) => {
  // Show the title element that we pass in from ImageScreen.js
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {imageScore} / 5</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
