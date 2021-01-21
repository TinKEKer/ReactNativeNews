import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import {View, Keyboard, Animated, StyleSheet,SafeAreaView} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../utils/dimensions';
import LottieView from 'lottie-react-native';
import {Error} from './Error';
import {useDispatch, useSelector} from 'react-redux';
import {ResetQRCode, SaveQRCode} from '../utils/redux/actions';
import {useFocusEffect} from '@react-navigation/core';
import { isIOS } from "../utils/helpers/isIOS";


export const QRCodeComponent = () => {
  const [text, setText] = React.useState('');
  const [create, setCreate] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [hideAnimation, setHideAnimation] = React.useState(true);
  const AnimateCreating = React.useRef(new Animated.Value(0)).current;
  const QRCodeOpacity = React.useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();
  const isQrCodeCreated = useSelector(
    (state) => state.MainReducer.isQrCodeCreated,
  );
  const QRCodeText = useSelector((state) => state.MainReducer.QRCodeText);


  useFocusEffect(
    React.useCallback(() => {
      isQrCodeCreated &&
        QRCodeText !== '' &&
        (setCreate(true),
        setText(QRCodeText),
        setError(false),
        setHideAnimation(true),
        QRCodeOpacity.setValue(1));
    }, []),
  );

  React.useEffect(() => {
    !error && create && dispatch(SaveQRCode(text));
  }, [error, create]);

  React.useEffect(() => {
    create &&
      Animated.parallel([
        Animated.timing(AnimateCreating, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(QRCodeOpacity, {
          toValue: 1,
          duration: 3500,
          useNativeDriver: true,
        }),
      ]).start(() => setHideAnimation(true));
  }, [create]);

  return (
    <SafeAreaView style={styles.container}>
      {!create && !error && (
        <>
          <TextInput
            label="Text to create"
            mode={'outlined'}
            value={text}
            onChangeText={(text) => {
              setText(text);
            }}
            style={{paddingBottom: 10}}
          />
          <Button
            mode={'contained'}
            disabled={
              text.trim('') === '' || text === undefined || text === null
            }
            onPress={() => {
              Keyboard.dismiss();
              setError(false);
              setCreate(true);
              setHideAnimation(false);
            }}>
            Create
          </Button>
        </>
      )}
      <Animated.View style={{alignItems: 'center', opacity: QRCodeOpacity}}>
        {create && !error && (
          <QRCode value={text} size={300} onError={() => setError(true)} />
        )}
      </Animated.View>
      {create && !hideAnimation && <Animated.View style={{opacity:QRCodeOpacity.interpolate({inputRange:[0,1],outputRange:[1,0]}),position:'absolute',top:isIOS?-DEVICE_HEIGHT*0.05:-DEVICE_HEIGHT * 0.1,alignSelf:'center',zIndex:100}} >
          <LottieView
            source={require('../assets/lottie/QRCode.json')}
            progress={AnimateCreating}
            style={{width: 700, height: 700}}
          />
        </Animated.View>
      }
      {error && <Error />}
      {create && (
        <View style={styles.generateButton}>
          <Button
            mode={'contained'}
            onPress={() => {
              setCreate(false);
              setError(false);
              setHideAnimation(true);
              AnimateCreating.setValue(0);
              QRCodeOpacity.setValue(0);
              dispatch(ResetQRCode());
            }}>
            Generate New Code
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: DEVICE_HEIGHT * 0.2,
  },
  generateButton: {
    paddingTop: 10,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: DEVICE_WIDTH * 0.9,
  },
});

