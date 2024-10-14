import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useWallpaper } from '@/hooks/useWallpapar';
import AllWallpapars from '@/components/AllWallpapars';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  // Fetch all wallpapers once and share it with all screens
  const { wallpapers } = useWallpaper();

  return (
    <Tab.Navigator style={{ paddingTop: '5%' }}>
      <Tab.Screen name="Suggested">
        {() => <SuggestedScreen wallpapers={wallpapers} />}
      </Tab.Screen>
      <Tab.Screen name="Liked">
        {() => <LikedScreen wallpapers={wallpapers} />}
      </Tab.Screen>
      <Tab.Screen name="Library">
        {() => <LibraryScreen wallpapers={wallpapers} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default MyTabs;

// Suggested Tab Screen
function SuggestedScreen({ wallpapers }: { wallpapers: any[] }) {
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <AllWallpapars wallpapers={wallpapers} onSelectWallpaper={setSelectedWallpaper} />
    </SafeAreaView>
  );
}

// Liked Tab Screen
function LikedScreen({ wallpapers }: { wallpapers: any[] }) {
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <AllWallpapars wallpapers={wallpapers} onSelectWallpaper={setSelectedWallpaper} />
    </SafeAreaView>
  );
}

// Library Tab Screen
function LibraryScreen({ wallpapers }: { wallpapers: any[] }) {
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <AllWallpapars wallpapers={wallpapers} onSelectWallpaper={setSelectedWallpaper} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
