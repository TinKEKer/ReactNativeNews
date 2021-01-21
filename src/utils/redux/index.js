import {combineReducers, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {reducer} from './reducers';

const Reducers = {
  MainReducer: reducer,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(Reducers),
)

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
