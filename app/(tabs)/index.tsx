import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ParallaxScrollView from '@/components/ParallaxScrollView';


const Explore = () => {
  const wallpaper = useWallpaper(); // Get a single wallpaper object
  const colorScheme = useColorScheme(); // Detect system theme (light/dark)

  return (
    <SafeAreaView style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={colorScheme === 'dark' ? 'black' : 'white'}
        headerImage={wallpaper.url || ''}
      >
        <View style={styles.content}>
          <WallpaperCard wallpaper={wallpaper} />
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerImage: {
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
