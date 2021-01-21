import {LOGIN, LOGOUT, RESETQRCODE, SAVEQRCODE} from '../types';

const initialState = {
  isLoggedIn: false,
  profile: {},
  isQrCodeCreated: false,
  QRCodeText: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        profile: action.payload,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        profile: {},
      };
    }

    case SAVEQRCODE: {
      return {
        ...state,
        isQrCodeCreated: true,
        QRCodeText: action.payload,
      };
    }

    case RESETQRCODE: {
      return {
        ...state,
        isQrCodeCreated: false,
        QRCodeText: '',
      };
    }

    default:
      return state;
  }
};
