// app/_layout.js
import React from 'react';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Chloe': require('../assets/fonts/Chloe-Regular.ttf'),
    'OpenSans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'PlayfairDisplay': require('../assets/fonts/PlayfairDisplay-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return <Slot />;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
