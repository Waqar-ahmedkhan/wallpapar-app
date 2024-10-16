import React from 'react';
import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Account = () => {
  const theme = useColorScheme() ?? 'light';

  return (
    <SafeAreaView style={styles.container}>
      <AuthButton 
        label="Login with Google" 
        icon={
          <Ionicons 
            name='logo-google' 
            size={32} // Increased icon size
            color={theme === 'light' ? 'black' : 'white'} 
          />
        } 
      />
      <AuthButton 
        label="Sign up with Apple" 
        icon={
          <Ionicons 
            name='logo-apple' 
            size={32} // Increased icon size
            color={theme === 'light' ? 'black' : 'white'} 
          />
        } 
      />
    </SafeAreaView>
  );
};

export default Account;

function AuthButton({ icon, label }) {
  return (
    <Pressable style={styles.button}>
      {icon}
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align to the top
    alignItems: 'center',
    paddingTop: 50, // Added padding to create space at the top
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15, // Increased padding for button height
    paddingHorizontal: 20, // Increased padding for button width
    marginVertical: 10,
    width: '80%', // Set the button width to 80% of the screen width
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12, // Slightly rounded corners
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 15, // Increased margin between icon and text
    fontSize: 16, // Larger text size
  },
});
