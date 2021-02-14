import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Router from './router'

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle='light-content' backgroundColor='#292F3F' />
    <View style={{ flex: 1, backgroundColor: '#292F3F' }}>
      <Router />
    </View>
  </NavigationContainer>
);

export default App;
