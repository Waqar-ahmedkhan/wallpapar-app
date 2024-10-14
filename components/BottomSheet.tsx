import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { WallpaperType } from '@/hooks/useWallpapar';

interface DownloadPictureProps {
  onClose: () => void;
  wallpaper: WallpaperType;
}

export const DownloadPicture: React.FC<DownloadPictureProps> = ({ onClose, wallpaper }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback(
    (index: number) => {
      console.log('handleSheetChanges', index);
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={['50%']}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={styles.handleIndicator}
      backgroundStyle={styles.bottomSheetBackground} // Added this to ensure white background
      handleStyle={{ height: 0 }}
    >
      <View style={styles.contentContainer}>
        <Image source={{ uri: wallpaper.url }} style={styles.wallpaperPreview} />
        <Button title="Download" onPress={() => console.log('Download button clicked')} />
        <Text style={styles.wallpaperName}>{wallpaper.name}</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: 'white', // Explicitly setting the background color of the bottom sheet to white
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white', // Ensuring the content container also has a white background
  },
  wallpaperPreview: {
    width: '80%',
    height: '50%',
    marginBottom: 16,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  wallpaperName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 8,
  },
  handleIndicator: {
    backgroundColor: '#00000040',
  },
});

export default DownloadPicture;
