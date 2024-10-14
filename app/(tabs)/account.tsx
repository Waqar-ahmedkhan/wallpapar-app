import React, { useState } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { DownloadPicture } from '@/components/BottomSheet';
import { WallpaperType } from '@/hooks/useWallpapar';

const Account = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const sampleWallpaper: WallpaperType = {
    url: 'https://example.com/sample-wallpaper.jpg', // Replace with a valid wallpaper URL
    name: 'Sample Wallpaper',
  };

  const handleOpenPicture = () => {
    setBottomSheetVisible(true);
  };

  const handleClosePicture = () => {
    setBottomSheetVisible(false);
  };

  return (
    <SafeAreaView>
      <Text>Account</Text>
      <Link href="/accountinfo">
        <Text>Account Information</Text>
      </Link>

      <Link href="/liked">
        <Text>Liked</Text>
      </Link>

      <Button title="Open Picture" onPress={handleOpenPicture} />

      {isBottomSheetVisible && (
        <DownloadPicture wallpaper={sampleWallpaper} onClose={handleClosePicture} />
      )}
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({});
