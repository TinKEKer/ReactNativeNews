import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
const Stack = createSharedElementStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigation} from './drawer';
import Details from '../../components/Details';

export const Navigator = () => {
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={'Home'} component={DrawerNavigation} />
        <Stack.Screen
          name={'Details'}
          component={Details}
          options={{cardStyleInterpolator: forFade, gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
