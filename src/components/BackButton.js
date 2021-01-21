import React from 'react';
import {TouchableWithoutFeedback, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import { isIOS } from "../utils/helpers/isIOS";

export const BackButton = ({navigation}) => {
  const ButtonRef = React.useRef();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        ButtonRef.current.slideOutLeft(100).then(() => navigation.goBack())
      }>
      <Animatable.View
        style={styles.container}
        useNativeDriver={true}
        animation={'slideInLeft'}
        delay={200}
        ref={ButtonRef}>
        <Icon name="arrow-back" size={40} color="black" />
      </Animatable.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 15,
    top: isIOS ? 40 : 20,
    zIndex: 100,
    backgroundColor: 'grey',
    opacity: 0.7,
    width: 60,
    borderRadius: 20,
    alignItems: 'center',
  },
});
