import { Contact } from '../types'
import {CONTACT_TYPES} from '../actions/actionTypes'

const INITIAL_STATE = {
  list: {} as Contact,
  loading: false
}

function contactReducer(state =INITIAL_STATE, action: any) {
  switch (action.type) {
    case CONTACT_TYPES.SET_DATA: {
      return {
        ...state,
        list: action.payload,
      };
    }
    case CONTACT_TYPES.LOADING: {
      return {
        ...state,
        loading: action.payload
      }
    }
    case CONTACT_TYPES.SET_CALL_TIME: {
      const contacts = state.list.dataList
      const foundContact = contacts.find(item => item.enqId === action.payload)
      
      if (foundContact) {
        foundContact.called = Date.now()
      }

      return {
        ...state,
      }
    }
    default: 
      return state
  }
}

export default contactReducer