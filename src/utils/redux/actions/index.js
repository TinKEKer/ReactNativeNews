import {LOGIN, LOGOUT, RESETQRCODE, SAVEQRCODE} from '../types';

export const LogIn = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const LogOut = () => {
  return {
    type: LOGOUT,
  };
};

export const SaveQRCode = (data) => {
  return {
    type: SAVEQRCODE,
    payload: data,
  };
};

export const ResetQRCode = () => {
  return {
    type: RESETQRCODE,
  };
};
