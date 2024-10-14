import React, { useState } from 'react';
import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useWallpaper, WallpaperType } from '@/hooks/useWallpapar';
import { DownloadPicture } from '@/components/BottomSheet';
import WallpaparCard from '@/components/WallpaparCard';
import { ThemedView } from '@/components/ThemedView';

const Explore = () => {
  const { randomWallpaper, wallpapers } = useWallpaper();
  const [selectedWallpaper, setSelectedWallpaper] = useState<WallpaperType | null>(null);
  const { width: screenWidth } = useWindowDimensions();

  // Render each wallpaper as a card
  const renderWallpaper = ({ item }: { item: WallpaperType }) => (
    <WallpaparCard
      onPress={() => setSelectedWallpaper(item)} // Set wallpaper on press
      wallpaper={item}
      style={styles.wallpaperCard}
    />
  );

  // Header image for the ParallaxScrollView
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
        <ThemedView style={styles.content}>
          <FlashList
            data={wallpapers}
            renderItem={renderWallpaper}
            estimatedItemSize={screenWidth / 2}
            numColumns={2}
            keyExtractor={(item) => item.url}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </ThemedView>
      </ParallaxScrollView>

      {/* Render BottomSheet when wallpaper is selected */}
      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => {
            setSelectedWallpaper(null); // Reset wallpaper on close
          }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 450,
    resizeMode: 'cover',
  },
  placeholderHeader: {
    height: 350,
    backgroundColor: '#ccc',
    width: '100%',
  },
  content: {
    flex: 1,
  },
  wallpaperCard: {
    flex: 1,
    margin: 4,
    height: 200,
    width: '100%',
  },
  separator: {
    height: 10,
  },
});

export default Explore;
