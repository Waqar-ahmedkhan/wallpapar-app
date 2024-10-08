import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WallpaperType } from '@/hooks/useWallpapar';

const WallpaparCard = ({ wallpaper }: { wallpaper: WallpaperType }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <Text style={styles.text}>{wallpaper.name}</Text>
    </View>
  );
};

export default WallpaparCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
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
