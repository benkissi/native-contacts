import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import ContactList from "../components/List"
import Details from "../components/Details"

type RootStackParamList = {
  Contacts: undefined;
  Details: undefined
};

const Stack = createStackNavigator<RootStackParamList>()

function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={ContactList} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

export default Navigator