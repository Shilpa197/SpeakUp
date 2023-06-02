import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Linking,
  Animated,
} from "react-native";
import React, { useLayoutEffect, useState, } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "../components/Avatar";



const HomeScreen = () => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const ProfileInfo = () => {
    return (
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require("../assets/profile.png")}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
    );
  };

  function handleAccountLink() {
    const url = "/";
    Linking.openURL(url);
  }

  const handleLogout = () => {
    // Perform logout logic here
    console.log("User logged out");
  };

  const TalkingImage = ({ source }) => {
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
        {menuOpen && (
          <View style={styles.sideMenu}>
            <View style={styles.sideMenuHeader}>
              <ProfileInfo />
              <TouchableOpacity onPress={handleMenuClose}>
                <Text style={styles.closeIcon}>X</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="person-circle-outline" size={30}></Ionicons>
              <TouchableOpacity onPress={handleAccountLink}>
                <Text style={styles.sideMenuItem}>My Account</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="log-out-outline" size={30}></Ionicons>
              <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.sideMenuItem}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
       <Avatar /> 
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="trash-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="mic-outline" size={50} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="send-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  tex: {
    color: "white",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
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
  

  sideMenu: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "70%",
    backgroundColor: "#d3daeb",
    padding: 16,
  },
  sideMenuHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sideMenuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
  },
  sideMenuItem: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  profileName: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
  },
  closeButtonIcon: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
    //borderTopWidth: 1,
    //borderTopColor: '#ECECEC',
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
});

}
export default HomeScreen;
