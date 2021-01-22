# Welcome to ReactNativeNews


### Some information about project:
Just a simple app for testing my React-Native skills.This app has 4 screens and drawer(to navigate between them).
News screen is simple bitcoin news screen with preview of some of them,after clicking on some of it,you will navigate to DetailNews screen with cool SharedElement effect).
QRCode screen allows you to generate simple QRCode from string + you have opportunity to remake it.Creating QRCode accompanied by interesting animation.
Camera screen allows you to take a photo and instantly upload your image to server(image uploaded in base64 format).
Profile screen is protected with authentication(default login:User,password:123456).
If you logged in,state will be saved into AsyncStorage with help of [Redux-Persist](https://github.com/rt2zz/redux-persist#readme)
Authentication route is done by me,so in fact that's HOC which can be dynamicly configured for every route you want.

### Main Technologies used in project:
* [React-Native](https://github.com/facebook/react-native)
* [React-Navigation](https://github.com/react-navigation/react-navigation)
* [Redux](https://github.com/reduxjs/redux)
* [Redux-Persist](https://github.com/rt2zz/redux-persist)
* [AsyncStorage](https://github.com/react-native-async-storage/async-storage)
* [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)
* [React-Native-Animatable](https://github.com/oblador/react-native-animatable)
* [React-Native-Camera](https://github.com/react-native-camera/react-native-camera)
* [React-Native-QRCODE-SVG](https://github.com/awesomejerry/react-native-qrcode-svg)
* [React-Navigation-Shared-Element](https://github.com/IjzerenHein/react-navigation-shared-element)
* [React-Native-Touchable-Scale](https://github.com/kohver/react-native-touchable-scale)

### Installation
Download/Clone the project,install dependencies and start the app.
```sh
$ cd RNTest
$ npm install
$ npm run ios or npm run android
```
Or you can download [apk](https://drive.google.com/drive/folders/1whpyhnbLQx4togQHChU_JpA5hgV76Z12?usp=sharing)

### HELP
 Android:
 > If you having issues with building app just try this:
 Download/Clone the projec,install dependencies and start the app.
```sh
$ cd android&&./gradlew clean + delete .gralde folder in ./android
$ cd ..
$ npm run android 
```
 IOS:
 > If you having issues with building app just try this:
  ```sh
$ cd ios
$ open TestTask.xcodeproj and check in Build Phases if there are no fonts files in Copy Bundle Resources dropdown
$ cd ..
$ npm run ios
```

----
### App Screenshots 
<img src="https://i.ibb.co/ypXSFKF/Screenshot-1611268379.png" alt="Screenshot-1611268379" border="0">
<img src="https://i.ibb.co/Tw2GMfY/Screenshot-1611268418.png" alt="Screenshot-1611268418" border="0">
<img src="https://i.ibb.co/tDFyYy6/Screenshot-1611262854.png" alt="Screenshot-1611262854" border="0">
<img src="https://i.ibb.co/khZVDyd/Screenshot-1611268426.png" alt="Screenshot-1611268426" border="0">
<img src="https://i.ibb.co/P4PpWyD/Screenshot-1611268395.png" alt="Screenshot-1611268395" border="0">
<img src="https://i.ibb.co/1nNJT5d/Screenshot-1611268392.png" alt="Screenshot-1611268392" border="0">
<img src="https://i.ibb.co/PxvZ41d/Screenshot-1611268397.png" alt="Screenshot-1611268397" border="0">
<img src="https://i.ibb.co/gjTdVfq/Screenshot-1611268404.png" alt="Screenshot-1611268404" border="0">

License
----
MIT

