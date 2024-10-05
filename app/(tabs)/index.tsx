import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, Text } from 'react-native';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="suggested" component={HomeScreen} />
      <Tab.Screen name="liked" component={SettingsScreen} />
      <Tab.Screen name="library" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text> 
    </View>
  );
}
