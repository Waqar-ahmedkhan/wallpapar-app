import React, { useState } from 'react';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useWallpaper } from '@/hooks/useWallpapar';
import { DownloadPicture } from '@/components/BottomSheet';
import AllWallpapars from '@/components/AllWallpapars';

const Explore = () => {
  const { randomWallpaper, wallpapers } = useWallpaper();
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);

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
        <AllWallpapars wallpapers={wallpapers} onSelectWallpaper={setSelectedWallpaper} />
      </ParallaxScrollView>
      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
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
});

export default Explore;
