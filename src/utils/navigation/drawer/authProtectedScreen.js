import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {Login} from '../../../components/Login';

const Stack = createStackNavigator();

export const AuthProtectedScreen = ({children, name}) => {
  const isLoggedIn = useSelector((state) => state.MainReducer.isLoggedIn);
  return (
    <Stack.Navigator header={null} headerMode="none">
      {isLoggedIn ? (
        <Stack.Screen name={name.toString()}>
          {(props) => React.cloneElement(children, props)}
        </Stack.Screen>
      ) : (
        <Stack.Screen name={'Login'} component={Login} />
      )}
    </Stack.Navigator>
  );
};
