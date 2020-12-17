import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

import {RootState} from '../store'

import { CONTACT_TYPES } from './actionTypes'

import {fetchList} from '../../services/api'
import { parseSync } from '@babel/core'

export const setLoading = (state: boolean) => ({
  type: CONTACT_TYPES.LOADING,
  payload: state
})

export const setData = (list: []) => ({
  type: CONTACT_TYPES.SET_DATA,
  payload: list
})

export const setCallTime = (id: string) => ({
  type: CONTACT_TYPES.SET_CALL_TIME,
  payload: id
})

export const fetchData = ():ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const data = await fetchList()
        dispatch(setData(data))
      dispatch(setLoading(false))
    } catch (err) {
      dispatch(setLoading(false))
    }
  }
}