import React, { useState, useEffect } from 'react';
import { Animated, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import PrimaryButton from '../components/PrimaryButton';
import CustomProgressBar from '../components/CustomProgressBar';
import VerticalSlider from '../components/VerticalSlider';
import globalStyles from './styles/globalStyles';

export default function ScreenTimeEstimation() {
  const router = useRouter();
  const [timeValue, setTimeValue] = useState(60);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const hours = Math.floor(timeValue / 60);
  const minutes = timeValue % 60;
  const formattedTime = `${hours}h ${minutes}m`;

  const handlePress = () => {
    router.replace("/phonepickups");
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={globalStyles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <CustomProgressBar progress={0.4} />

        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <Text style={globalStyles.title}>
            How much time do you spend on your phone every day?
          </Text>
        </Animated.View>

        <View style={styles.sliderContainer}>
          <VerticalSlider
            min={0}
            max={1440}
            initialValue={timeValue}
            onValueChange={(val) => setTimeValue(val)}
          />
          <Text style={styles.sliderValueText}>{formattedTime}</Text>
        </View>

        <Animated.View style={[styles.bottomContainer, { opacity: fadeAnim }]}>
          <PrimaryButton 
            title="Continue" 
            onPress={handlePress} 
            containerStyle={{ position: 'relative', width: '90%', marginBottom: 10 }}
          />
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    top: '18%',
    left: '2%',
    right: '2%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  sliderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    marginTop: '25%',
  },
  sliderValueText: {
    marginTop: 10,
    fontSize: 18,
    color: '#922661',
    fontWeight: 'bold',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '11.8%',
    left: '5%',
    right: '5%',
    alignItems: 'center',
    zIndex: 10,
  },
});
