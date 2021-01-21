import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {LogOut} from '../utils/redux/actions/index';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../utils/dimensions/index';


const Profile = ()=>{
  const isLoggedIn = useSelector((state) => state.MainReducer.isLoggedIn);
  const profileData = useSelector((state) => state.MainReducer.profile);

  const dispatch = useDispatch();

  return (
    isLoggedIn && (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Avatar.Text label={profileData.email.substring(0, 2)} />
          <Text style={styles.welcomeText}>
            Welcome back {profileData.email}
          </Text>
        </View>
        <Button
          onPress={() => dispatch(LogOut())}
          mode={'contained'}
          style={styles.logOutButton}>
          LogOut
        </Button>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: DEVICE_HEIGHT * 0.15,
  },
  avatarContainer: {
    margin: 20,
    flexDirection: 'row',
  },
  welcomeText: {
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: DEVICE_WIDTH * 0.1,
  },
  logOutButton: {
    width: DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
  },
});

export const ProfileComponent = React.memo(Profile);
