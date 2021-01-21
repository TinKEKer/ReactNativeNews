import React from 'react';
import {View, Text, Image, Linking, StyleSheet} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Button} from 'react-native-paper';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../utils/dimensions';
import {normalizeText} from '../utils/helpers/formatText';
import {BackButton} from './BackButton';
import * as Animatable from 'react-native-animatable';
import {validateImageURL} from '../utils/helpers/validateImageURL';
import { isIOS } from "../utils/helpers/isIOS";


const NewsDetails = ({route, navigation}) => {
  const {
    urlToImage,
    source,
    publishedAt,
    description,
    title,
    url,
  } = route.params.item;
  return (
    <>
      <BackButton navigation={navigation} />
      <SharedElement
        id={`item.${urlToImage}.photo`}
        style={styles.sharedElement}>
        <Image
          source={{uri: validateImageURL(urlToImage)}}
          style={styles.image}
          resizeMode={'cover'}
        />
      </SharedElement>
      <Animatable.View
        useNativeDriver={true}
        duration={650}
        delay={100}
        animation={'slideInUp'}
        style={styles.infoContainer}>
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text style={styles.text}>{source.name}</Text>
          <View style={styles.dot} />
          <Text style={styles.text}>{publishedAt.slice(0, 10)}</Text>
        </View>
        <View style={{marginHorizontal: 5, marginVertical: 10}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={{fontSize: 18, marginTop: 10}}>
            {normalizeText(description)}
          </Text>
          {url !== '' && url !== undefined && url !== null && (
            <Button
              style={{alignSelf: 'flex-end', justifyContent: 'center'}}
              mode={'outlined'}
              onPress={() => Linking.openURL(url)}>
              Read More
            </Button>
          )}
        </View>
      </Animatable.View>
    </>
  );
};

NewsDetails.sharedElements = (route) => {
  const {item} = route.params;
  return [{id: `item.${item.urlToImage}.photo`}];
};

const styles = StyleSheet.create({
  sharedElement: {
    width: DEVICE_WIDTH,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: DEVICE_WIDTH,
  },
  infoContainer: {
    position: 'absolute',
    backgroundColor: '#FFF',
    top: isIOS?DEVICE_HEIGHT*0.22: DEVICE_HEIGHT * 0.24,
    height: DEVICE_HEIGHT,
    borderRadius: 16,
    width: DEVICE_WIDTH,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'black',
    width: 10,
    height: 10,
    borderRadius: 100,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    opacity: 0.9,
    width: DEVICE_WIDTH * 0.99,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default NewsDetails;
