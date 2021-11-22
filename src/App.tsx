import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Main from './Main';
import configureStore from './Store';
import RNBootSplash from 'react-native-bootsplash';
const App = () => {
  const {store, persistor} = configureStore();

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 2000);
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
