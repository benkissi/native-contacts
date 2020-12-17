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
    called?: number;
  }[];
  isAdmin: boolean;
  type: string;
}
