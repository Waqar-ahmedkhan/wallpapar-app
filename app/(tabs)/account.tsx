import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const account = () => {
  return (
    <SafeAreaView>
      <Text>account</Text>
      <Link href={"/accountinfo"}>
      <Text> account_information</Text>
      </Link>
    </SafeAreaView>
  )
}

export default account

const styles = StyleSheet.create({})