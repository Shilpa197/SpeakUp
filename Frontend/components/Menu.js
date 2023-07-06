import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

const Menu = () => {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const menuIcon = menuOpen ? 'X' : <Ionicons name="menu-outline" size={24} />;

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={handleMenuPress}>
        <Text style={styles.menuIcon}>{menuIcon}</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>SpeakUp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  menuIcon: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontFamily: 'Righteous-Regular',
    color: 'white',
    fontSize: 30,
    marginLeft: 10,
  },
});

export default Menu;
