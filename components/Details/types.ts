import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Contacts: undefined;
  Details: {id: number, iconColor: string}
};


export type ListScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Details'
  >;

export  type ListScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
