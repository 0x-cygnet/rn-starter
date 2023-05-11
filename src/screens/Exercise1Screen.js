import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Exercise1Screen = () => {
  const myName = "Chris";

  return (
    <View>
      <Text style={styles.first}>Getting started with React Native!</Text>
      <Text style={styles.second}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  first: {
    fontSize: 45,
  },
  second: {
    fontSize: 20,
  },
});

export default Exercise1Screen;
