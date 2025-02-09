import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import PrimaryButton from '../components/PrimaryButton';
import CustomProgressBar from '../components/CustomProgressBar';
import VerticalSlider from '../components/VerticalSlider';

export default function PhonePickupsEstimation() {
  const router = useRouter();
  const [pickupCount, setPickupCount] = useState(10);

  const handlePress = () => {
    router.replace("/setgoals");
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <CustomProgressBar progress={0.66} />
          <Text style={styles.headerTitle}>
            How often do you pick up your phone during the day?
          </Text>
        </View>

        <View style={styles.sliderWrapper}>
          <VerticalSlider 
            min={0}
            max={500}
            initialValue={pickupCount}
            onValueChange={(val) => setPickupCount(val)}
            sliderHeight={180}
          />
        </View>

        <View style={styles.footer}>
          <PrimaryButton 
            title="Continue"
            onPress={handlePress}
            containerStyle={{ position: 'relative', width: '90%', marginBottom: 10 }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: '5%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  headerTitle: {
    color: '#922661',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'PlayfairDisplay',
    marginHorizontal: '5%',
  },
  sliderWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -90 }],
    zIndex: 10,
  },
  footer: {
    position: 'absolute',
    bottom: '5%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
});
