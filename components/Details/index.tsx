import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {findContact} from '../../store/selectors';

import {View, Text, ViewStyle, TextStyle, Button, Alert, Platform, Linking} from 'react-native';

import {ListScreenNavigationProp, ListScreenRouteProp} from './types';
import {COLORS} from '../../utils/colors';
import {getFirstChar, verifyNumber} from '../../utils';

const WRAPPER: ViewStyle = {
  flex: 1,
  backgroundColor: COLORS.light_bg,
  alignItems: 'center',
  paddingHorizontal: 20
};

const ICON: ViewStyle = {
  borderRadius: 100,
  width: 100,
  height: 100,
  backgroundColor: 'blue',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
};

const ICON_TEXT: TextStyle = {
  fontSize: 40,
  color: COLORS.light_bg,
};

const TEXT: TextStyle = {
  fontSize: 16,
  color: COLORS.text,
};

const NUMBER: TextStyle = {
  fontSize: 30,
  color: COLORS.text,
  fontWeight: '600',
  marginVertical: 10
};

const BUTTON_WRAPPER: ViewStyle = {
  width: "100%",
  marginTop: 20,
}

interface Props {
  route: ListScreenRouteProp;
  navigation: ListScreenNavigationProp;
}

function Details({route, navigation}: Props) {
  const {id, iconColor} = route.params;
  const contact = useSelector((state) => findContact(id, state));

  const handleButtonPress = (num: string) => {
    const isCorrect = verifyNumber(num)
    if (!isCorrect) {
      Alert.alert('Not Valid', 'Number is not a valid number')
    } else {
      openDialScreen(num)
    }
  }

  const openDialScreen = (phoneNumber: string) => {
    let dial = '';
    if (Platform.OS === 'ios') {
      dial = `telprompt:${phoneNumber}`;
    } else {
      dial = `tel:${phoneNumber}`;
    }
    console.log('dial', dial);
    Linking.openURL(dial);
  };

  return (
    <View style={WRAPPER}>
      <View style={{...ICON, backgroundColor: iconColor}}>
        <Text style={ICON_TEXT}>{getFirstChar(contact.name)}</Text>
      </View>
      <Text style={TEXT}>{contact.name}</Text>
      <Text style={NUMBER}>{contact.phoneNumber}</Text>
      <Text style={TEXT}>{contact.categoryName}</Text>
      <Text style={TEXT}>{contact.location}</Text>
      <View style={BUTTON_WRAPPER}>
        <Button title="Call" onPress={() => handleButtonPress(contact.phoneNumber) }/>
      </View>
    </View>
  );
}

export default Details;
