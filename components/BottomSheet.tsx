import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { WallpaperType } from '@/hooks/useWallpapar';
import { BounceOutLeft } from 'react-native-reanimated';

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
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <View style={styles.contentContainer}>
          <Image source={{ uri: wallpaper.url }} style={styles.wallpaperPreview} />
          <Text style={styles.wallpaperName}>{wallpaper.name}</Text>
          <Text style={styles.text}>
            Do you want to download this wallpaper?
          </Text>
           <Button title='download'  />
          <Text style={styles.text}>Awesome 🎉</Text>
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
  bottomSheetBackground: {
    backgroundColor: 'white',
  },
  handleIndicator: {
    backgroundColor: '#00000040',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
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
    color: 'black',
  },
  text: {
    color: 'black',
  },
});