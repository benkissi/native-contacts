import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';

import {NavigationContainer} from '@react-navigation/native';
import Navigator from './navigation/AppNiavigator';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
