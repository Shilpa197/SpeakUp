import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SideMenu = ({ handleMenuClose }) => {
  const handleAccountLink = () => {
    const url = "/";
    Linking.openURL(url);
  };

  const handleLogout = () => {
    // Perform logout logic here
    console.log("User logged out");
  };

  return (
    <View style={styles.sideMenu}>
      <View style={styles.sideMenuHeader}>
        {/* ProfileInfo component */}
        <TouchableOpacity onPress={handleMenuClose}>
          <Text style={styles.closeIcon}>X</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.sideMenuItem}
        onPress={handleAccountLink}
      >
        <Ionicons name="person-circle-outline" size={30} />
        <Text style={styles.sideMenuItemText}>My Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sideMenuItem} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={30} />
        <Text style={styles.sideMenuItemText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  sideMenu: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  sideMenuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  closeIcon: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sideMenuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  sideMenuItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
};

export default SideMenu;
