/**
 * Created by Thomas on 2018/11/06.
 */

import * as actionTypes from '../constants/index'

const initialState = {
  data: 1
}

export default function tabActive(state = initialState, action) {

  switch (action.type) {
    case actionTypes.UPDATE_TAB_ACTIVE:
      return {
        ...state,
        data: action.data
      }

    default:
      return state
  }
}
