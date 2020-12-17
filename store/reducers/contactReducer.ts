import { Contact } from '../types'
import {CONTACT_TYPES} from '../actions/actionTypes'

const INITIAL_STATE = {
  list: [],
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
    default: 
      return state
  }
}

export default contactReducer