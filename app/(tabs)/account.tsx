import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch, TouchableOpacity, ScrollView, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Account = () => {
  const deviceColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(deviceColorScheme === 'dark');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [biometricsEnabled, setBiometricsEnabled] = useState(false);

  const toggleColorScheme = () => setIsDarkMode(!isDarkMode);

  const theme = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f0f0f0',
    textColor: isDarkMode ? '#ffffff' : '#000000',
    cardColor: isDarkMode ? '#2a2a2a' : '#ffffff',
    accentColor: '#4a90e2',
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.backgroundColor }]}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Ionicons
            name="person-circle-outline"
            size={80}
            color={theme.textColor}
          />
          <Text style={[styles.headerText, { color: theme.textColor }]}>
            John Doe
          </Text>
          <Text style={[styles.subHeaderText, { color: theme.textColor }]}>
            john.doe@example.com
          </Text>
        </View>

        <View style={styles.settingsContainer}>
          <SettingItem
            icon="moon-outline"
            title="Dark Mode"
            theme={theme}
            isSwitch
            value={isDarkMode}
            onValueChange={toggleColorScheme}
          />
          <SettingItem
            icon="notifications-outline"
            title="Notifications"
            theme={theme}
            isSwitch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
          <SettingItem
            icon="finger-print-outline"
            title="Biometric Login"
            theme={theme}
            isSwitch
            value={biometricsEnabled}
            onValueChange={setBiometricsEnabled}
          />
          <SettingItem
            icon="lock-closed-outline"
            title="Change Password"
            theme={theme}
          />
          <SettingItem
            icon="help-circle-outline"
            title="Help & Support"
            theme={theme}
          />
          <SettingItem
            icon="information-circle-outline"
            title="About"
            theme={theme}
          />
        </View>

        <TouchableOpacity 
          style={[styles.logoutButton, { backgroundColor: theme.accentColor }]}
          onPress={() => console.log('Logout pressed')}
        >
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const SettingItem = ({ icon, title, theme, isSwitch, value, onValueChange }: any) => {
  return (
    <View style={[styles.settingItem, { backgroundColor: theme.cardColor }]}>
      <View style={styles.settingItemLeft}>
        <Ionicons name={icon} size={24} color={theme.accentColor} />
        <Text style={[styles.settingItemText, { color: theme.textColor }]}>{title}</Text>
      </View>
      {isSwitch ? (
        <Switch
          trackColor={{ false: "#767577", true: theme.accentColor }}
          thumbColor={value ? "#f4f3f4" : "#f4f3f4"}
          onValueChange={onValueChange}
          value={value}
        />
      ) : (
        <Ionicons name="chevron-forward-outline" size={24} color={theme.textColor} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subHeaderText: {
    fontSize: 16,
    marginTop: 5,
  },
  settingsContainer: {
    marginBottom: 30,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingItemText: {
    marginLeft: 15,
    fontSize: 16,
  },
  logoutButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Account;