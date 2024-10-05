import { Button, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DownloadPicture } from '@/components/BottomSheet';

const Explore = () => {
  const [showPic, setShowPic] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Button
          title="Show Bottom Sheet"
          onPress={() => {
            setShowPic(true);
          }}
        />
      </View>
      {showPic && <DownloadPicture onClose={() => setShowPic(false)} />}
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({});
