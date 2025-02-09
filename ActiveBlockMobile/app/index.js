// app/index.js
import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';
import PrimaryButton from '../components/PrimaryButton';
import globalStyles from './styles/globalStyles';

export default function SplashScreen() {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function preloadAssets() {
      await Asset.loadAsync(require('../assets/images/background2.png'));
    }
    preloadAssets();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }, 5100);
    return () => clearTimeout(timer);
  }, []);

  const handlePress = () => {
    router.replace("/onboarding");
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/images/intro.mp4')}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping={false}
        pointerEvents="none"
      />
      {showOverlay && (
        <>
          {/* Title and subtitle */}
          <Animated.View style={[styles.topOverlay, { opacity: fadeAnim }]}>
            <Text style={globalStyles.title}>
              Ready to reclaim your time and shine? Let's turn those steps into sweet rewards and rock your day!
            </Text>
            <Text style={globalStyles.subtitle}>Welcome to ActiveBlock</Text>
          </Animated.View>
          {/* Button and agreement text */}
          <Animated.View style={[styles.bottomContainer, { opacity: fadeAnim }]}>
            <PrimaryButton
              title="Let's do it"
              onPress={handlePress}
              containerStyle={{ position: 'relative', left: 0, right: 0 }}
            />
            <Text style={[styles.agreementText, { marginTop: 10 }]}>
              By tapping "Let's do it", you agree to our Privacy Policy and Terms of Use.
            </Text>
          </Animated.View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  topOverlay: {
    position: 'absolute',
    top: '15%',
    left: '5%',
    right: '5%',
    alignItems: 'center',
    zIndex: 10,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    right: '5%',
    alignItems: 'center',
    zIndex: 10,
  },
  agreementText: {
    color: '#b24c9b',
    fontSize: 12,
    textAlign: 'center',
  },
});
