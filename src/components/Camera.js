import React from 'react';
import {View, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import LottieView from 'lottie-react-native';
import {DEVICE_HEIGHT} from '../utils/dimensions';
import {api} from '../utils/api/api';
import {isIOS} from '../utils/helpers/isIOS';
export const Camera = () => {
  const [uploading, setUploading] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(false);
  let camera;

  const LottieRef = React.useRef(null);
  const AnimateLoader = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    uploading &&
      !uploaded &&
      Animated.timing(AnimateLoader, {
        duration: 700,
        toValue: 1,
        useNativeDriver: true,
      }).start();
    !uploading && uploaded && AnimateLoader.setValue(0);
  }, [uploaded, uploading]);

  return (
    <View style={styles.container}>
      <RNCamera
        captureAudio={false}
        ref={(ref) => {
          camera = ref;
        }}
        style={styles.cameraContainer}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') {
            return (
              <LottieView
                source={require('../assets/lottie/CameraLoader.json')}
                loop={true}
                autoPlay={true}
                style={[styles.container, {alignSelf: 'center'}]}
              />
            );
          }
          return (
            <View style={styles.cameraButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setUploading(true);
                  setUploaded(false);
                  LottieRef.current.play();
                  camera.takePictureAsync({base64: true}).then((data) => {
                    api.sendPhotoToServer(
                      data.base64,
                      setUploading,
                      setUploaded,
                    );
                  });
                }}
                style={styles.touchable}>
                <LottieView
                  ref={LottieRef}
                  source={require('../assets/lottie/camera.json')}
                  loop={false}
                  speed={1.4}
                  style={{width: 150, height: 150}}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
      {uploading && !uploaded && (
        <LottieView
          progress={AnimateLoader}
          source={require('../assets/lottie/ImgeUploading.json')}
          style={styles.imageUploading}
          loop={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraButtonContainer: {
    alignSelf: 'center',
    marginBottom: isIOS ? -DEVICE_HEIGHT * 0.05 : -DEVICE_HEIGHT * 0.08,
  },
  touchable: {
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  imageUploading: {
    position: 'absolute',
    height: 200,
    width: 200,
    top: isIOS ? DEVICE_HEIGHT * 0.06 : DEVICE_HEIGHT * 0.1,
    alignSelf: 'center',
  },
});
