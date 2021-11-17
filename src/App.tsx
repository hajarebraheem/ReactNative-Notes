import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Main from './Main';
import configureStore from './Store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const {store, persistor} = configureStore();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
