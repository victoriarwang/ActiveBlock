// app/onboarding.js
import React, { useState, useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import { useRouter } from 'expo-router';
import CustomProgressBar from '../components/CustomProgressBar';
import PrimaryButton from '../components/PrimaryButton';

export default function OnboardingScreen() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const router = useRouter();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePress = () => {
    router.replace("/screentime");
  };

  return (
    <ImageBackground
      source={require('../assets/images/background2.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <CustomProgressBar progress={0.2} />
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <Text style={styles.title}>
            Let's make this all about <Text style={{ fontStyle: 'italic' }}>you</Text>! 💖 {'\n'} We're customizing AppBlock to fit your vibe.✨
          </Text>
          <Text style={styles.subtitle}>
            Just a few quick questions before we start! Your answers will help us personalize your experience, so everything feels just right for you.
          </Text>
        </Animated.View>
        <Animated.View style={[styles.bottomContainer, { opacity: fadeAnim }]}>
          <PrimaryButton title="Continue" onPress={handlePress} containerStyle={{ position: 'relative', left: 0, right: 0 }} />
          <Text style={[styles.dataPolicyText, { marginTop: 10 }]}>
            Data Policy
          </Text>
        </Animated.View>
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
    justifyContent: 'flex-start',
    position: 'relative',
  },
  CustomProgressBar: {
    marginTop: 120,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 30,
    marginBottom: 0,
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
  title: {
    color: '#922661',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'PlayfairDisplay',
  },
  subtitle: {
    color: '#b24c9b',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'OpenSans',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '11.8%',
    left: '5%',
    right: '5%',
    alignItems: 'center',
    zIndex: 10,
  },
  dataPolicyText: {
    color: '#b24c9b',
    fontSize: 12,
    textAlign: 'center',
  },
});
