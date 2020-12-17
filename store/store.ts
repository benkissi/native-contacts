import thunk from 'redux-thunk';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import contactReducer from './reducers/contactReducer'

const middlewares = [thunk];

const composeEnhancers =  compose;

const rootReducer = combineReducers({
    contacts: contactReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)) )