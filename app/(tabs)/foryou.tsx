import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useLikedWallpaper, useSuggestedWallpaper, useLikedLibrary } from '@/hooks/useWallpapar';
import AllWallpapars from '@/components/AllWallpapars';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator style={{ paddingTop: '5%' }}>
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;

// Suggested Tab Screen
function SuggestedScreen() {
  const suggestedWallpapers = useSuggestedWallpaper();

  return (
    <SafeAreaView style={styles.container}>
      <AllWallpapars wallpapers={suggestedWallpapers} />
    </SafeAreaView>
  );
}

// Liked Tab Screen
function LikedScreen() {
  const likedWallpapers = useLikedWallpaper();

  return (
    <SafeAreaView style={styles.container}>
      <AllWallpapars wallpapers={likedWallpapers} />
    </SafeAreaView>
  );
}

// Library Tab Screen
function LibraryScreen() {
  const libraryWallpapers = useLikedLibrary();

  return (
    <SafeAreaView style={styles.container}>
      <AllWallpapars wallpapers={libraryWallpapers} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
