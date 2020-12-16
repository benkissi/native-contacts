import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export interface Contact {
  dataList: {
    showReportInaccurate: boolean;
    isNumberShared: boolean;
    enqId: number;
    isArchive: boolean;
    fromAd: boolean;
    classLocPref: string;
    isStarred: boolean;
    categoryName: string;
    createdOn: string;
    isUnread: boolean;
    providerType: string;
    isJob: boolean;
    isExclusive: boolean;
    enquiryType: string;
    enquiryStatus: string;
    phoneNumber: string;
    isFree: boolean;
    name: string;
    postedOn: string;
    location: string;
    isReportInaccurate: boolean;
    tag: string;
  }[];
  isAdmin: boolean;
  type: string;
}

export type RootStackParamList = {
  Contacts: undefined;
  Details: {id: number}
};


export type ListScreenNavigationProp = StackNavigationProp<
RootStackParamList,
'Contacts'
  >;

export  type ListScreenRouteProp = RouteProp<RootStackParamList, 'Contacts'>;
