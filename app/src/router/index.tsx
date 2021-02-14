import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../pages/Search';


const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#292F3F' }
    }}
  >
    <App.Screen name='Search' component={Search} />
  </App.Navigator>
);

export default AppRoutes;
