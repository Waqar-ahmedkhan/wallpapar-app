import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { WallpaperType } from '@/hooks/useWallpapar';

interface WallpaparCardProps {
  wallpaper: WallpaperType;
  style?: ViewStyle;
}

const WallpaparCard: React.FC<WallpaparCardProps> = ({ wallpaper, style }) => {
  return (
    <View style={[styles.card, style]}>
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
    aspectRatio: 1, // This will make the image square
    borderRadius: 10,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});