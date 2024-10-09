import React from 'react';
import { Image, StyleSheet, View, ViewStyle, useColorScheme } from 'react-native';
import { WallpaperType } from '@/hooks/useWallpapar';
import { ThemedText } from './ThemedText';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface WallpaparCardProps {
  wallpaper: WallpaperType;
  style?: ViewStyle;
}

const WallpaparCard: React.FC<WallpaparCardProps> = ({ wallpaper, style }) => {
  const theme = useColorScheme() ?? 'light';

  return (
    <View style={[styles.card, style]}>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <View style={styles.textContainer}>
        <ThemedText style={styles.name}>{wallpaper.name}</ThemedText>
        <Ionicons
          name="heart"
          size={24}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
      </View>
    </View>
  );
};

export default WallpaparCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});