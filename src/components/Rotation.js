import React from 'react';

import { Animated, Easing, Image, StyleSheet, View } from 'react-native';

const Rotation = (props, currentSong) => {
    const iconAnimation = new Animated.Value(0);

    // Loop the animation
    Animated.loop(
        Animated.sequence([
            Animated.delay(100),
            Animated.timing(
                iconAnimation,
                {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                iconAnimation,
                {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true
                }
            ),
        ]),
        {}
    ).start();

    const rotationalAnimation = iconAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })


    return (
        <View {...props}>
            <View style={styles.innerContainer}>
                <Animated.View style={{transform: [{rotate: rotationalAnimation}] }}>
                    <Image source={currentSong.cover} />
                </Animated.View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Rotation;