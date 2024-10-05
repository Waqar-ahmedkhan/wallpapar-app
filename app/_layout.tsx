import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const _layout = () => {
   return <GestureHandlerRootView>
      <Slot/>
       </GestureHandlerRootView> 
}

export default _layout

const styles = StyleSheet.create({})