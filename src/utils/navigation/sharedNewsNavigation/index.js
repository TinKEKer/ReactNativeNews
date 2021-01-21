import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {News} from '../../../components/News';
import NewsDetails from '../../../components/Details';
const Stack = createSharedElementStackNavigator();

export const SharedNewsNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="News" headerMode={'none'}>
      <Stack.Screen name={'News'} component={News} />
      <Stack.Screen name={'Details'} component={NewsDetails} />
    </Stack.Navigator>
  );
};
