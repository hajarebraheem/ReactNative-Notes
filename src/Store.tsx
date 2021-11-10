import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore} from 'redux';
import allReducers from './redux/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, allReducers);
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  const store = createStore(persistedReducer, composeEnhancers);
  const persistor = persistStore(store);

  return {store, persistor};
};

export default configureStore;
