import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { IconButton } from 'react-native-paper';
import Avatar from '../components/Avatar';
import SideMenu from '../components/SideMenu';
import Menu from '../components/Menu';
import RecordButton from '../components/RecordButton';

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

  async function loadFonts() {
    await Font.loadAsync({
      'Righteous-Regular': require('../assets/font/Righteous-Regular.ttf'),
      // Add more custom fonts if needed
    });
    setFontsLoaded(true);
  }

  if (!fontsLoaded) {
    return null; // Or a loading screen
  }

  const handleDelete = () => {
    Alert.alert('Delete', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          // Perform delete logic here
          console.log('Delete button clicked');
        },
      },
    ]);
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Menu />
      </SafeAreaView>
      <Avatar />
      <View style={styles.bottomBar}>
        <RecordButton />
      </View>
      {menuOpen ? <SideMenu /> : null}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default HomeScreen;
