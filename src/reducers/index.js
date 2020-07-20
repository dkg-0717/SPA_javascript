import { combineReducers } from 'redux'
import main from './main'
import editor from './editor'

export default combineReducers({
  main,
  editor
})