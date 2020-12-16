import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigation/AppNiavigator"

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
};

export default App;
