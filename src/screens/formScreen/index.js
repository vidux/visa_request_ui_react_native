import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
//import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import formScreen_Terms from './formScreen_Terms';
import formScreen_PeInfo from './formScreen_PeInfo';
import formScreen_trvlInfo from './formScreen_trvlInfo'
import formScreen_hotels from './formScreen_hotels'
import formScreen_tvlagent from './formScreen_tvlagent'
import formScreen_SlRelations from './formScreen_SlRelations'
import formScreen_InfoReview from './formScreen_InfoReview'
import formScreen_reference from './formScreen_reference'

import Header from '../../common/components/Header';
import CancelModal from './cancelModal';

const Stack = createBottomTabNavigator();

const FormNavigatior = () => {
  return (
    <Stack.Navigator
      initialRouteName={'formScreen_Terms'}
      screenOptions={{
        headerShown: false,
        tabBarVisible: false,
      }}>
      <Stack.Screen name={'formScreen_Terms'} component={formScreen_Terms} />
      <Stack.Screen name={'formScreen_PeInfo'} component={formScreen_PeInfo} />
      <Stack.Screen name={'formScreen_trvlInfo'} component={formScreen_trvlInfo} />
      <Stack.Screen name={'formScreen_hotels'} component={formScreen_hotels} />
      <Stack.Screen name={'formScreen_tvlagent'} component={formScreen_tvlagent} />
      <Stack.Screen name={'formScreen_SlRelations'} component={formScreen_SlRelations} />
      <Stack.Screen name={'formScreen_InfoReview'} component={formScreen_InfoReview} />
      <Stack.Screen name={'formScreen_reference'} component={formScreen_reference} />
    </Stack.Navigator>
  );
};

const tabContainer = props => {
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <FormNavigatior />
      </SafeAreaView>
      <CancelModal /> 
    </>
  );
};

export default tabContainer;
