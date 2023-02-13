import * as React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './components/MainNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
