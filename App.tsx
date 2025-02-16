import React, { useEffect } from 'react';

import Navigations from 'navigations';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

import store from './store';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <Navigations />
    </Provider>
  );
}

export default App;
