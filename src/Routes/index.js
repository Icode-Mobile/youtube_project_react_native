import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../views/Login';
import Home from '../views/Home';
import Detalhes from '../views/Detalhes';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Detalhes' component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
