import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
export const Error = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/lottie/SomethingWentWrong.json')}
        autoPlay={true}
        loop={false}
        style={styles.lottie}
      />
      <Text style={styles.text}>Something went wrong...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
  },
  lottie: {
    width: 300,
    height: 300,
  },
});
