import { combineReducers } from 'redux'
import user from './user'
import contacts from './contacts'

export default combineReducers({contacts, user})