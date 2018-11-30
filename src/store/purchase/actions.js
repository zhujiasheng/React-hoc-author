/**
 * Created by Thomas on 2018/11/07.
 */

import * as actionType from '../constants/index'
import api from '../../api/index'

export const fetchPurchaseList = () => dispatch => {

  return dispatch({
    type: actionType.FILTER_PURCHASE_DATA_LIST,
    promise: api.getPurchaseData()
  })
}
