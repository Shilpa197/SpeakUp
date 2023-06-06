import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ source }) => {
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={require('../assets/samp1.jpg')}
        onError={(error) => console.log("Error loading image:", error)}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%", // set a fixed height
    width: "100%", // set a fixed width
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  avatar: {
    //borderRadius: 15,
    borderTopLeftRadius: 150, // use a fixed value instead of percentage
    borderTopRightRadius: 150,
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
    width: 301, // set the width of the image
    height: 301, // set the height of the image
  },
});

export default Avatar;