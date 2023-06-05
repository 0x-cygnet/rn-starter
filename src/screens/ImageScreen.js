import React from "react";
import { View, Text, StyleSheet } from "react-native";

//import custom components here
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      {/* 
      The props below are NOT pre-defined - they're custom 
      They get passed back to the child component (Image Detail here) in the "props" attribute

      images need the "{require("...path...")}"
      text can just be in ""
      Numbers need to be in {}
      */}
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={4}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={1}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
