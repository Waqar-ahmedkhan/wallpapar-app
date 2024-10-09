import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { WallpaperType } from '@/hooks/useWallpapar';

interface WallpaperDetailsProps {
  wallpaper: WallpaperType;
  onClose: () => void;
}

const WallpaperDetails: React.FC<WallpaperDetailsProps> = ({ wallpaper, onClose }) => {
  const handleDownload = () => {
    // Implement download functionality here
    console.log('Downloading wallpaper:', wallpaper.name);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <Text style={styles.name}>{wallpaper.name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleDownload}>
        <Text style={styles.buttonText}>Download</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.closeButton]} onPress={onClose}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 16,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  closeButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WallpaperDetails;