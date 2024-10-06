import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { wallpaper as WallpaperType } from '@/hooks/useWallpapar';

const WallpaparCard = ({ wallpaper }: { wallpaper: WallpaperType }) => {
  return (
    <View>
      <Image source={{ uri: wallpaper.url }} style={styles.images} />
      <Text style={styles.text}>{wallpaper.name}</Text>
    </View>
  );
};

export default WallpaparCard;

const styles = StyleSheet.create({
  images: {
    flex: 1,
    height: 300,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
