// app/components/CustomProgressBar.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function CustomProgressBar({ progress }) {
  return (
    <ProgressBar
      progress={progress}
      color="#922661"
      style={[styles.CustomProgressBar, { backgroundColor: 'white' }]}
    />
  );
}

const styles = StyleSheet.create({
  CustomProgressBar: {
    marginTop: 120,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 30,
    marginBottom: 0,
  },
});
