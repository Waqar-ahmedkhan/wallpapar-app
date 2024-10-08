import React from 'react';
import { Image, StyleSheet, View,  useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useWallpaper, WallpaperType } from '@/hooks/useWallpapar';
import WallpaparCard from '@/components/WallpaparCard';

const Explore = () => {
  const { randomWallpaper, wallpapers } = useWallpaper();

  const { width: screenWidth } = useWindowDimensions();

  const renderWallpaper = ({ item }: { item: WallpaperType }) => (
    <WallpaparCard wallpaper={item} style={styles.wallpaperCard} />
  );

  const headerImage = randomWallpaper ? (
    <Image
      style={styles.headerImage}
      source={{ uri: randomWallpaper.url }}
      resizeMode="cover"
    />
  ) : (
    <View style={styles.placeholderHeader} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{
          dark: 'black',
          light: 'white',
        }}
        headerImage={headerImage}
      >
        <View style={styles.content}>
          <FlashList
            data={wallpapers}
            renderItem={renderWallpaper}
            estimatedItemSize={screenWidth / 2}
            numColumns={2}
            keyExtractor={(item) => item.url}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  placeholderHeader: {
    height: 350,
    backgroundColor: '#ccc', 
    width: '100%',
  },
  content: {
    flex: 1,
    padding: 8,
  },
  wallpaperCard: {
    flex: 1,
    margin: 4,
    height: 250,
    width: "100%" 
    // Adjust this value to change the height of each card
  },
  separator: {
    height: 8,
  },
});