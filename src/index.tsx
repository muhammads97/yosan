import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {Details, Home} from './screens';
import {Routes} from './navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Details} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
