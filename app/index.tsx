import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <View>
      <Text>Index: is it working or not?</Text>
      {/* Button component - Correct usage */}
      <Button title="Sign Up" onPress={() => console.log('Button Pressed!')} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
