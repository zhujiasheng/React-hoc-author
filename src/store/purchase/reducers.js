/**
 * Created by Thomas on 2018/11/07.
 */

import * as actionTypes from '../constants/index'

const initialState = {
  data: []
}

export default function purchaseListData(state = initialState, action) {

  switch (action.type) {
    case actionTypes.FILTER_PURCHASE_DATA_LIST_SUCCESS:
      return {
        ...state.data,
        data: action.json
      }
    case actionTypes.FILTER_PURCHASE_DATA_LIST_FAILURE:
      return state
    default:
      return state
  }
}
