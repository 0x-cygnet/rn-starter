import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({imageSource, title}) => {

  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default ImageDetail;
