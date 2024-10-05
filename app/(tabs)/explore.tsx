import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DownloadPicture } from '@/components/BottomSheet'


const explore = () => {
  const [ShowPic, setShowPic] = useState(false)
  return (
    <SafeAreaView>
      <Text>explore</Text>
      <Button title='bottom sheet' onPress={()=> {
          setShowPic(true)
      }}/>

      {DownloadPicture &&  <DownloadPicture />}
    </SafeAreaView>
  )
}

export default explore

const styles = StyleSheet.create({})