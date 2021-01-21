import React from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';
import {api} from '../utils/api/api';
import {Card, Text, ActivityIndicator} from 'react-native-paper';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../utils/dimensions';
import {TouchableScaleHOC} from "../HOC's/TouchableScale";
import {SharedElement} from 'react-navigation-shared-element';
import {Error} from './Error';
import {validateImageURL} from '../utils/helpers/validateImageURL';
import {SafeAreaView} from 'react-navigation';

export const News = (props) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    api.getBitcoinNews(setData, setError);
  }, []);

  const NewsCard = ({data}) => (
    <Card>
      <SharedElement
        id={`item.${data.urlToImage}.photo`}
        style={styles.sharedElement}>
        <Image
          resizeMode={'cover'}
          source={{
            uri: validateImageURL(data.urlToImage),
          }}
          style={styles.image}
        />
      </SharedElement>
      <Card.Content>
        <Text numberOfLines={2} style={{fontSize: 20}}>
          {data.title}
        </Text>
      </Card.Content>
    </Card>
  );

  const renderItem = React.useCallback(({item}) => {
    return (
      <View style={{marginVertical: 10}}>
        <TouchableScaleHOC
          callback={() => props.navigation.navigate('Details', {item: item})}>
          <NewsCard data={item} />
        </TouchableScaleHOC>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={[{width: DEVICE_WIDTH * 0.9}, styles.container]}>
      {data === null && !error && (
        <ActivityIndicator size={'large'} style={styles.indicator} />
      )}
      {data !== null && !error && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
      {error && <Error />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 10,
  },
  sharedElement: {
    width: DEVICE_WIDTH * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: DEVICE_WIDTH * 0.9,
  },
  indicator: {
    flex: 1,
    alignSelf: 'center',
    marginTop: DEVICE_HEIGHT * 0.35,
  },
});
