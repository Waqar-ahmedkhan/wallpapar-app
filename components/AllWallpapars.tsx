import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import WallpaparCard from '@/components/WallpaparCard';



const AllWallpapars = ({ wallpapers, onSelectWallpaper }: any) => {
  const { width: screenWidth } = useWindowDimensions();

  const renderWallpaper = ({ item }: any) => (
    <WallpaparCard
      onPress={() => onSelectWallpaper(item)}
      wallpaper={item}
      style={styles.wallpaperCard}
    />
  );

  return (
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
  );
};

const styles = StyleSheet.create({
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

export default AllWallpapars;
