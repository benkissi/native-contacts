import React, {useCallback, useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';


import {View, Text, FlatList, ViewStyle, TouchableOpacity} from 'react-native';

import {fetchList} from '../../services/api';

import {Contact, ListScreenNavigationProp, ListScreenRouteProp} from './types';

const WRAPPER: ViewStyle = {
  flex: 1,
};

const CONTACT_ITEM: ViewStyle = {
  flexDirection: 'row',
  width: "100%",
  backgroundColor: "red",
  marginVertical: 5,
  padding: 2
}



interface Props {
  route: ListScreenRouteProp,
  navigation: ListScreenNavigationProp
}

function ContactList({ route, navigation }: Props) {
  const [list, setList] = useState<Contact>({} as Contact);

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      const getData = async () => {
        const data = await fetchList();
        console.log('data', data);
        setList(data);
      };

      if (mounted) {
        getData();
      }

      return () => {
        mounted = false;
      };
    }, []),
  );

  const _renderContact: ({item}: {item: any}) => JSX.Element = ({item}) => {
    console.log('the item', item);
    return (
      <TouchableOpacity style={CONTACT_ITEM} onPress={() => handleContactClick(item.enqId)}>
        <View>
          <Text>{item.phoneNumber}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleContactClick = (contactId:number) => {
    navigation.navigate("Details", {
      id: contactId
    })
  }

  return (
    <View style={WRAPPER}>
      <Text>List</Text>
      <FlatList data={list.dataList} renderItem={_renderContact} />
    </View>
  );
}

export default ContactList;
