import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Sera Beth';

  return (
    <View>
      <Text style={styles.textStyle}>This is the ComponentsScreen</Text>
      <Text style={styles.subHeaderStyle}>Hello my name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 44,
  },
  subHeaderStyle: {},
});

export default ComponentsScreen;
