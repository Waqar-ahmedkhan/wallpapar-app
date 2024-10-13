import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { WallpaperType } from '@/hooks/useWallpapar';

interface DownloadPictureProps {
  onClose: () => void;
  wallpaper: WallpaperType;
}

export const DownloadPicture: React.FC<DownloadPictureProps> = ({ onClose, wallpaper }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    if (index === -1) {
      onClose();
    }
  }, [onClose]);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={['25%', '50%', '90%']}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
      >
        <View style={styles.contentContainer}>
          <Image source={{ uri: wallpaper.url }} style={styles.wallpaperPreview} />
          <Text style={styles.wallpaperName}>{wallpaper.name}</Text>
          <Text>Awesome 🎉</Text>
          {/* Add more content or buttons for downloading, etc. */}
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  wallpaperPreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  wallpaperName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});