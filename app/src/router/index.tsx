import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../pages/Search';
import Favoritos from '../pages/Favoritos';
const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#292F3F' }
    }}
  >
    <App.Screen name='search' component={Search} />

    <App.Screen name='favoritos' component={Favoritos} />


  </App.Navigator>
);

export default AppRoutes;
