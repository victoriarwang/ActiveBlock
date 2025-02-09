// app/components/VerticalSlider.js
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';

export default function VerticalSlider({
  min,
  max,
  initialValue,
  onValueChange,
  sliderWidth = 100,
  sliderHeight = 300,
}) {
  const [value, setValue] = useState(initialValue);

  const calculateFillHeight = (val) => {
    const ratio = (val - min) / (max - min);
    return ratio * sliderHeight;
  };

  const fillHeight = calculateFillHeight(value);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        let newY = evt.nativeEvent.locationY;
        if (newY < 0) newY = 0;
        if (newY > sliderHeight) newY = sliderHeight;
        const ratio = 1 - newY / sliderHeight;
        const newValue = Math.round(ratio * (max - min) + min);
        setValue(newValue);
        if (onValueChange) onValueChange(newValue);
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  return (
    <View
      style={[styles.sliderContainer, { width: sliderWidth, height: sliderHeight }]}
      {...panResponder.panHandlers}
    >
      <View style={[styles.sliderTrack, { height: sliderHeight }]} />
      <View style={[styles.sliderFill, { height: fillHeight }]} />
      <Text style={styles.sliderValue}>
        {value}
        {min === 0 && max === 24
          ? 'h'
          : min === 0 && max === 500
          ? 'x'
          : ''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    borderWidth: 2,
    borderColor: '#922661',
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    position: 'relative',
  },
  sliderTrack: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#eee',
  },
  sliderFill: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#922661',
  },
  sliderValue: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
