import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter(); // Correct hook from expo-router
  
  return (
    <View style={styles.container}>
      {/* Navigation Links */}
      <Link href="/Foryou">
        <Text style={styles.linkText}>Link to ForYou Page</Text>
      </Link>
      <Link href="/explore">
        <Text style={styles.linkText}>Link to Explore Page</Text>
      </Link>
      <Link href="/account">
        <Text style={styles.linkText}>Link to Account Page</Text>
      </Link>

      {/* Button Component - Corrected Navigation */}
      <Button title="Sign Up" onPress={() => router.push('/Foryou')} />

      {/* Bottom Bar for Testing */}
      <View style={styles.bottomBar}>
        <Link href="/Foryou">
          <Text style={styles.barText}>Home</Text>
        </Link>
        <Link href="/explore">
          <Text style={styles.barText}>explore</Text>
        </Link>
        <Link href="/account">
          <Text style={styles.barText}>account</Text>
        </Link>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 18,
    color: 'blue',
    marginVertical: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
    backgroundColor: '#ddd',
    position: 'absolute',
    bottom: 0,
  },
  barText: {
    fontSize: 16,
    color: 'black',
  },
});
