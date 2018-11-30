/**
 * Created by Thomas on 2018/10/23.
 */

import {combineReducers} from 'redux';

import testReducer from './test/reducers'
import tabActive from './footTab/reducers'
import purchaseListData from './purchase/reducers'

export default combineReducers({
  testReducer,
  tabActive,
  purchaseListData,

})
