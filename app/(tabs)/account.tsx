import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { DownloadPicture } from '@/components/BottomSheet';
import { WallpaperType } from '@/hooks/useWallpapar';
import { Ionicons } from '@expo/vector-icons';

const Account = () => {
  <SafeAreaView style={ {flex: 1}}>


<authButton label={"Login"} icon={<Ionicons name='logo-google' size={24} color={theme ==='light' ? Colors.light.icons : Colors.dark.icons}/>
}




  </SafeAreaView>
  
};

export default Account;

function authButton({icon, label}: {
  label: string,
  icon: any

}){
  const theme = useColorScheme() ?? "light";
  return <Pressable style={{
    backgroundColor: "black",
    padding: 10,
    marginHorizontal: 40,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10
    }}>
      {icon}
      <Text style={{
        color: "white",
        fontWeight: "bold",
        marginLeft: 10
      }}>{label}</Text>
    

  </Pressable>

  

}

const styles = StyleSheet.create({});
