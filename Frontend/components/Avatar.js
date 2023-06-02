import React, { useRef, useEffect } from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';

const Avatar = ({ source }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const imageRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000, // Change this to adjust the speed of the animation
        useNativeDriver: false,
      }).start(() => {
        // Reset the animation
        animatedValue.setValue(0);
        animate();
      });
    };

    animate();
  }, []);

  return (
    <View style={styles.avatarContainer}>
      <Image
        ref={imageRef}
        source={source}
        onError={(error) => console.log("Error loading image:", error)}
        style={{
          transform: [
            {
              scale: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.2],
              }),
            },
          ],
        }}
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
});

export default Avatar;
