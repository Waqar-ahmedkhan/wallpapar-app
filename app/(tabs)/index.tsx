import React from 'react';
import { FlatList, Image, StyleSheet, SafeAreaView, useColorScheme, View } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import WallpaparCard from '@/components/WallpaparCard';
import { useWallpaper, WallpaperType } from '@/hooks/useWallpapar';

const Explore = () => {
  const { randomWallpaper, wallpapers } = useWallpaper(); // Fetch wallpapers and a random wallpaper
  const colorScheme = useColorScheme(); // Detect system theme (light/dark)

  // Function to render each wallpaper card
  const renderWallpaper = ({ item }: { item: WallpaperType }) => <WallpaparCard wallpaper={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{dark: "black", light: "white"}}
        headerImage={
          <Image
            style={styles.headerImage}
            source={{ uri: randomWallpaper.url }} // Display the random wallpaper as the header image
          />
        }
      >
        <FlatList
          data={wallpapers}
          renderItem={renderWallpaper}
          keyExtractor={(item) => item.url} // Use the URL as the unique key
          contentContainerStyle={styles.content}
        />
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
    flex: 1,
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    paddingVertical: 10,
  },
});
