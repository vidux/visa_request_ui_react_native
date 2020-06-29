import React from 'react';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//screens
import perloadScreen from './screens/perloadScreen';
import startScreen from './screens/startScreen';
import formScreen from './screens/formScreen';

const Stack = createStackNavigator();

const StackNavigator = props => {
  return (
    <Stack.Navigator
      initialRouteName={'perloadScreen'}
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={'perloadScreen'}
        component={perloadScreen}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />

      <Stack.Screen
        name={'startScreen'}
        component={startScreen}
        options={{
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name={'formScreen'}
        component={formScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

const RootNavigator = () => (
  <SafeAreaProvider>
    <NavigationContainer theme={MyTheme}>
      <StackNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default RootNavigator;
