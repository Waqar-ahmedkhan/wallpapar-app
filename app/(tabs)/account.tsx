import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Account = () => {
  const theme = useColorScheme() ?? 'light';

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AuthButton 
        label="Login" 
        icon={
          <Ionicons 
            name='logo-google' 
            size={24} 
            color={theme === 'light' ? 'black' : 'white'} 
          />
        } 
      />
      <AuthButton 
        label="signup" 
        icon={
          <Ionicons 
            name='logo-google' 
            size={24} 
            color={theme === 'light' ? 'black' : 'white'} 
          />
    </SafeAreaView>
  );
};

export default Account;

function AuthButton({ icon, label }) {
  const theme = useColorScheme() ?? 'light';
  return (
    <Pressable style={styles.button}>
      {icon}
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 10,
    marginHorizontal: 40,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
