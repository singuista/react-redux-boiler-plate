import { combineReducers } 				from 'redux'
import { itemsHasErrored, itemsIsLoading, items } from './fetch-data-reducers'

const rootReducer = combineReducers({ 
    itemsHasErrored, 
    itemsIsLoading, 
    items
})
export default rootReducer