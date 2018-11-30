/**
 * Created by Thomas on 2018/10/23.
 */

import * as actionTypes from '../constants/index'

const initialState = {
  data: null
}

export default function testReducer(state = initialState, action) {

  switch (action.type) {
    case actionTypes.STORE_UPDATE_TEST_SUCCESS:
      return {
        ...state,
        data: action.json
      }

    default:
      return state
  }
}
