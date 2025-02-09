// app/screentime.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import PrimaryButton from '../components/PrimaryButton';
import CustomProgressBar from '../components/CustomProgressBar';
import VerticalSlider from '../components/VerticalSlider';

export default function ScreenTimeEstimation() {
    const router = useRouter();
    const [timeValue, setTimeValue] = useState(60);

    const hours = Math.floor(timeValue / 60);
    const minutes = timeValue % 60;
    const formattedTime = `${hours}h ${minutes}m`;

    const handlePress = () => {
        router.replace("/phonepickups");
    };

    return (
        <ImageBackground
            source={require('../assets/images/background.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <CustomProgressBar progress={0.4} />
                <Text style={styles.headerTitle}>
                    How much time do you spend on your phone every day?
                </Text>

                <View style={styles.sliderContainer}>
                    <VerticalSlider
                        min={0}
                        max={1440}
                        initialValue={timeValue}
                        onValueChange={(val) => setTimeValue(val)}
                    />
                    <Text style={styles.sliderValueText}>{formattedTime}</Text>
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
        justifyContent: 'flex-start',
    },
    header: {
        alignItems: 'center',
        paddingTop: 40,
    },
    headerTitle: {
        color: '#922661',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
        fontFamily: 'PlayfairDisplay',
        marginHorizontal: '5%',
    },
    sliderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderValueText: {
        marginTop: 10,
        fontSize: 18,
        color: '#922661',
        fontWeight: 'bold',
    },
    footer: {
        alignItems: 'center',
        paddingBottom: 20,
        width: '100%',
    },
});
