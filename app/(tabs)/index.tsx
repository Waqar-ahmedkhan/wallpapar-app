import { Button, Image, StyleSheet, Text, View, useColorScheme } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useWallpaper } from '@/hooks/useWallpapar';
import WallpaparCard from '@/components/WallpaparCard';

const Explore = () => {
  const wallpapers = useWallpaper(); // Get random wallpaper
  const colorScheme = useColorScheme(); // Detect system theme (light/dark)

  return (
    <SafeAreaView style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{
          dark: 'black',
          light: 'white', 
        }}
        headerImage={
          <Image
            style={styles.headerImage}
            source={{ uri: wallpapers.url }} // Pass the wallpaper URL
          />
        }
      >


     <View style={styles.container}>

    

        <View style={styles.container}>
          {/* <Text style={styles.welcomeText}>
            Welcome to the Explore Screen!
          </Text> */}

          {wallpapers.map((w: wallpapers) =>  <WallpaparCard  wallpaper={w} /> )}

          {/* Add Button or Additional UI if needed */}
          {/* <Button title="Show Bottom Sheet" onPress={() => setShowPic(true)} /> */}
        </View>

        <View style={styles.container}>
          {/* <Text style={styles.welcomeText}>
            Welcome to the Explore Screen!
          </Text> */}

          {wallpapers.map((w: wallpapers) =>  <WallpaparCard  wallpaper={w} /> )}

          {/* Add Button or Additional UI if needed */}
          {/* <Button title="Show Bottom Sheet" onPress={() => setShowPic(true)} /> */}
        </View>
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    padding: 10
  },
  headerImage: {
    flex: 1,
    height: 300, // Adjust header image height as needed
    resizeMode: 'cover', // Ensure the image covers the space
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
