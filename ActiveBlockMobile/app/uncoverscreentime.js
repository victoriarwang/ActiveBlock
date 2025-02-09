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
import globalStyles from './styles/globalStyles';

export default function UncoverScreentime() {
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
      source={require('../assets/images/background3.png')}
      style={globalStyles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <CustomProgressBar progress={0.6} />
        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          <Text style={globalStyles.title}>
            Now, let's uncover your screen time. 
          </Text>
          <Text style={globalStyles.subtitle}>
          Grant ActiveBlock access to Screen Time and we'll generate your personal report.
          </Text>
        </Animated.View>
        <Animated.View style={[styles.bottomContainer, { opacity: fadeAnim }]}>
          <PrimaryButton title="Grant Permission" onPress={handlePress} containerStyle={{ position: 'relative', left: 0, right: 0 }} />
        </Animated.View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    position: 'relative',
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
  bottomContainer: {
    position: 'absolute',
    bottom: '12%',
    left: '5%',
    right: '5%',
    alignItems: 'center',
    zIndex: 10,
  },
});
