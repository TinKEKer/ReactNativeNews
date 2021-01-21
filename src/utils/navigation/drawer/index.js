import React from 'react';
import {Camera} from '../../../components/Camera';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthProtectedScreen} from './authProtectedScreen';
import {QRCodeComponent} from '../../../components/QRCode';
import {ProfileComponent} from '../../../components/Profile';
import {News} from '../../../components/News';
import Icon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{headerShown: true}}>
      <Drawer.Screen name="News" component={News} options={{
        drawerIcon:()=><Icon name={'newspaper-outline'} size={20} color={'black'}/>,
      }} />
      <Drawer.Screen name="QRCode" component={QRCodeComponent} options={{
        drawerIcon:()=><Icon name={'qr-code-outline'} size={20} color={'black'}/>
      }}/>
      <Drawer.Screen name="Camera" component={Camera} options={{
        drawerIcon:()=><Icon name={'camera-outline'} size={20} color={'black'}/>
      }} />
      <Drawer.Screen name={'Profile'} options={{
        drawerIcon:()=><Icon name={'person-circle-outline'} size={20} color={'black'}/>
      }}>
        {(props) => (
          <AuthProtectedScreen {...props} name={'Profile'}>
            <ProfileComponent />
          </AuthProtectedScreen>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
