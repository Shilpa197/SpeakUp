import React, { useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const RecordButton = () => {
  const [isRecording, setIsRecording] = useState(false);
  const scaleValue = useSharedValue(1);
  const buttonRef = useRef(null);

  const handleRecordPress = () => {
    setIsRecording(true);
    // Start recording logic here
  };

  const handleSendPress = () => {
    setIsRecording(false);
    // Send recording logic here
  };

  const handleDeletePress = () => {
    setIsRecording(false);
    // Delete recording logic here
  };

  const recordButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
    };
  });

  const startAnimation = () => {
    scaleValue.value = withTiming(1.2, { duration: 200 });
  };

  const resetAnimation = () => {
    scaleValue.value = withTiming(1, { duration: 200 });
  };

  const handleButtonPress = () => {
    if (!isRecording) {
      handleRecordPress();
      startAnimation();
    }
  };

  const handleButtonRelease = () => {
    if (isRecording) {
      handleSendPress();
    } else {
      resetAnimation();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tap to speak</Text>
      {isRecording ? (
        <View style={styles.recordContainer}>
          <TouchableOpacity onPress={handleSendPress} style={styles.button}>
            <Ionicons name="send" size={30} style={styles.sendIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDeletePress} style={styles.button}>
            <Ionicons name="trash" size={30} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          onPress={handleButtonPress}
          onPressOut={handleButtonRelease}
          style={styles.recordButton}
          ref={buttonRef}
        >
          <Animated.View style={[recordButtonStyle, styles.innerButton]}>
            <Ionicons name="mic" size={60} style={styles.recordIcon} />
          </Animated.View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    opacity: 0.5,
    color: "white",
    marginBottom: 10,
  },
  button: {
    marginVertical: 10,
  },
  recordButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  innerButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  recordIcon: {
    color: "white",
  },
  recordContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  sendIcon: {
    color: "green",
    marginRight: 20,
  },
  deleteIcon: {
    color: "red",
  },
});

export default RecordButton;
