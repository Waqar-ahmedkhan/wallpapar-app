import { Image, Pressable, StyleSheet, Text, useColorScheme, View, ViewStyle } from 'react-native';
import React from 'react';
import { WallpaperType } from '@/hooks/useWallpapar';
import { ThemedText } from './ThemedText';
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
    <Pressable onPress={onPress}> {/* Added onPress prop here */}
      <View style={[styles.card, style]}>
        <Image source={{ uri: wallpaper.url }} style={styles.image} />
        <View style={styles.text}>
          <ThemedText style={{ fontSize: 16, color: "white" }}>{wallpaper.name}</ThemedText>
          <Ionicons
            name={"heart"}
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
  text: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    backgroundColor: "rgb(0, 0, 0.1)",
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    
  },
});