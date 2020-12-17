import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ViewStyle,
  TouchableOpacity,
  Linking,
  Platform,
  ActivityIndicator,
  TextStyle,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {fetchData, setCallTime} from '../../store/actions/contactActions';
import {RootState} from '../../store/store';

import {ListScreenNavigationProp, ListScreenRouteProp} from './types';

import {getFirstChar, truncate, randomNumber, getDuration} from '../../utils';
import {COLORS} from '../../utils/colors';

const WRAPPER: ViewStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100%',
  backgroundColor: COLORS.light_bg,
};

const DETAILS_WRAPPER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};

const ICON: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 100,
  marginRight: 10,
  width: 30,
  height: 30,
  backgroundColor: 'purple',
  alignSelf: 'flex-start',
};

const ICON_TEXT: TextStyle = {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'white',
};

const CONTACT_ITEM: ViewStyle = {
  flexDirection: 'row',
  width: '100%',
  borderBottomColor: COLORS.light_grey,
  borderBottomWidth: 1,
  padding: 10,
};

const CONTACT_LEFT: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
};

const PHONE: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '20%',
};

const LIST_WRAPPER: ViewStyle = {
  flex: 1,
  width: '100%',
};

const DURATION: TextStyle = {
  color: COLORS.text,
  fontSize: 12
}

interface Props {
  route: ListScreenRouteProp;
  navigation: ListScreenNavigationProp;
}

const wait = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function ContactList({route, navigation}: Props) {
  const [refreshing, setRefreshing] = React.useState(false);
  const {loading, list} = useSelector((store: RootState) => store.contacts);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      if (mounted && !list?.dataList?.length) {
        dispatch(fetchData());
      }

      return () => {
        mounted = false;
      };
    }, []),
  );

  const openDialScreen = (phoneNumber: string, id:string) => {
    let dial = '';
    if (Platform.OS === 'ios') {
      dial = `telprompt:${phoneNumber}`;
    } else {
      dial = `tel:${phoneNumber}`;
    }
    console.log('dial', dial);
    dispatch(setCallTime(id))
    Linking.openURL(dial);
  };

  const _renderContact: ({
    item,
  }: {
    item: any;
  }) => JSX.Element = React.useCallback(({item}) => {
    const iconColor =
      COLORS.icon_colors[randomNumber(COLORS.icon_colors.length - 1)];
    return (
      <View style={CONTACT_ITEM}>
        <TouchableOpacity
          style={CONTACT_LEFT}
          onPress={() => handleContactClick(item.enqId, iconColor)}>
          <View style={DETAILS_WRAPPER}>
            <View style={{...ICON, backgroundColor: iconColor!}}>
              <Text style={ICON_TEXT}>{getFirstChar(item.name)}</Text>
            </View>
            <View>
              <Text>{truncate(item.name)}</Text>
              <Text>{truncate(item.categoryName)}</Text>
              <Text>{truncate(item.location)}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={PHONE}>
          <Text style={DURATION}>{item.called? getDuration(item.called): "Not called" }</Text>
          <TouchableOpacity onPress={() => openDialScreen(item.phoneNumber, item.enqId)}>
            <Icon name="mobile" size={30} color={iconColor} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }, []);

  const handleContactClick = (contactId: number, iconColor: string) => {
    navigation.navigate('Details', {
      id: contactId,
      iconColor,
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => {
      dispatch(fetchData());
      setRefreshing(false);
    });
  }, []);

  return (
    <View style={WRAPPER}>
      {!list?.dataList?.length && loading ? (
        <View style={{width: '100%'}}>
          <ActivityIndicator size={50} color="red" />
        </View>
      ) : (
        <View style={LIST_WRAPPER}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={list.dataList}
            renderItem={_renderContact}
            keyExtractor={(item) => '' + item.enqId}
          />
        </View>
      )}
    </View>
  );
}

export default ContactList;
