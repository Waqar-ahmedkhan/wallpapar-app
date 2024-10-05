import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons'; // For icons

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome</Text>

      <View style={styles.content}>
        {/* Content or main screens can be added here */}
        <Text style={styles.screenText}>This is the main content area</Text>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Link href="/Foryou">
            <Icon name="heart-outline" size={28} color="#2C6BED" />
            <Text style={styles.tabText}>For You</Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Link href="/account">
            <Icon name="person-outline" size={28} color="#2C6BED" />
            <Text style={styles.tabText}>Account</Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Link href="/explore">
            <Icon name="compass-outline" size={28} color="#2C6BED" />
            <Text style={styles.tabText}>Explore</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 18,
    color: '#555',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    elevation: 10,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#2C6BED',
    marginTop: 5,
  },
});
