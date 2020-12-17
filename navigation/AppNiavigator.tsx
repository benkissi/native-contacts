import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ContactList from '../components/List';
import Details from '../components/Details';

import {RootStackParamList} from './types';
import { COLORS } from '../utils/colors';

const Stack = createStackNavigator<RootStackParamList>();

function Navigator() {
  return (
    <Stack.Navigator
      headerMode="float"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: COLORS.light_bg,
          shadowColor: 'transparent',
          borderBottomWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      <Stack.Screen name="Contacts" component={ContactList} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default Navigator;
