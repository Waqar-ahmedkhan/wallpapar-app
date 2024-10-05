import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Slot } from 'expo-router';

const _layout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Main content area */}
        <Slot />
      </View>

      {/* Bottom navigation bar */}
      <View style={styles.bottomBar}>
        <Link href="/" style={styles.tabItem}>
          <Text style={styles.tabText}>For You</Text>
        </Link>
        <Link href="/account" style={styles.tabItem}>
          <Text style={styles.tabText}>Account</Text>
        </Link>
        <Link href="/explore" style={styles.tabItem}>
          <Text style={styles.tabText}>Explore</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default _layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light background color for the entire layout
  },
  content: {
    flex: 1,
    padding: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#333', // Dark gray or black background
    borderTopWidth: 1,
    borderTopColor: '#444', // Slightly lighter border color
  },
  tabItem: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabText: {
    color: '#FFF', // White text color for contrast against dark background
    fontSize: 14,
    fontWeight: 'bold',
  },
});
