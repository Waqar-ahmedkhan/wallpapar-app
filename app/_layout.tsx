import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const _layout = () => {
   return <GestureHandlerRootView>
      <Stack screenOptions={{headerShown: false}}>
         <Stack.Screen name='(accountinfo)/accountinfo' options={{headerShown:true, headerTitle:"account info", headerBackVisible: true}} />
      </Stack>
       </GestureHandlerRootView> 
}

export default _layout

const styles = StyleSheet.create({})