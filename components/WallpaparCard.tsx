import React from 'react';
import { Image, Pressable, StyleSheet, Text, useColorScheme, View, ViewStyle } from 'react-native';
import { WallpaperType } from '@/hooks/useWallpapar';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface WallpaparCardProps {
  wallpaper: WallpaperType;
  style?: ViewStyle;
  onPress: () => void;
}

const WallpaparCard: React.FC<WallpaparCardProps> = ({ onPress, wallpaper, style }) => {
  const theme = useColorScheme() ?? 'light';

  return (
    <Pressable onPress={onPress}>
      <View style={[styles.card, style]}>
        <Image source={{ uri: wallpaper.url }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.wallpaperName}>{wallpaper.name}</Text>
          <Ionicons
            name="heart"
            size={18}
            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          />
        </View>
      </View>
    </Pressable>
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
    height: 180,
    aspectRatio: 1, 
    borderRadius: 20,
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wallpaperName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});