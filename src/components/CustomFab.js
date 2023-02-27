import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import Animated, { Easing } from 'react-native-reanimated';

const AnimatedFAB2 = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => setAnimation(new Animated.Value(0)));
  };

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: rotation }] }}>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={startAnimation}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#2196F3',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default AnimatedFAB2;