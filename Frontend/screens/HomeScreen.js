import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "../components/Avatar";
import SideMenu from "../components/SideMenu";
import * as Font from "expo-font";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    loadFonts();
  }, [navigation]);

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const handleAccountLink = () => {
    const url = "/";
    Linking.openURL(url);
  };

  const handleLogout = () => {
    // Perform logout logic here
    console.log("User logged out");
  };

  async function loadFonts() {
    await Font.loadAsync({
      "Righteous-Regular": require("../assets/font/Righteous-Regular.ttf"),
      // Add more custom fonts if needed
    });
    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return null; // Or a loading screen
  }

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleMenuPress}>
            <Text style={styles.menuIcon}>{menuOpen ? "X" : "☰"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>SpeakUp</Text>
        </View>
      </SafeAreaView>
      <Avatar />
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            // Handle trash button click
          }}
        >
          <Ionicons name="trash-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            // Handle mic button click
          }}
        >
          <Ionicons name="mic-outline" size={50} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            // Handle send button click
          }}
        >
          <Ionicons name="send-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {menuOpen ? <SideMenu /> : null}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontFamily: "Righteous-Regular",
    color: "white",
    fontSize: 30,
    marginLeft: 10,
  },
  menuIcon: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  actionButton: {
    backgroundColor: "white",
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  icon: {
    color: "black",
  },
});

export default HomeScreen;
