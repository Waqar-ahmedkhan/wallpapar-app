import React from 'react';
import { FlatList, Image, StyleSheet, SafeAreaView, useColorScheme, View, ActivityIndicator } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import WallpaparCard from '@/components/WallpaparCard';
import { useWallpaper, WallpaperType } from '@/hooks/useWallpapar';

const Explore = () => {
  const { randomWallpaper, wallpapers, isLoading } = useWallpaper(); // Assume isLoading handles the loading state
  const colorScheme = useColorScheme(); // Detect system theme (light/dark)
  const headerBackgroundColor = colorScheme === 'dark' ? 'black' : 'white';

  // Function to render each wallpaper card
  const renderWallpaper = ({ item }: { item: WallpaperType }) => <WallpaparCard wallpaper={item} />;

  // Render a loading indicator if the wallpapers are still loading
  if (isLoading || !randomWallpaper) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={headerBackgroundColor} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{dark:"black", light:"white"}}
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
          getItemLayout={(data, index) => ({
            length: 100, // Approximate height of each item
            offset: 100 * index,
            index,
          })}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
