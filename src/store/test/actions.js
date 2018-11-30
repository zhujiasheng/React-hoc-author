/**
 * Created by Thomas on 2018/10/23.
 */

import * as actionType from '../constants/index'
import api from '../../api/index'

export const updateImgTest = () => dispatch => {
  return dispatch({
    type: actionType.STORE_UPDATE_TEST,
    promise: api.fetchTestImg()
  })
}


export const fetchRecommendsData = (page, id, title, sorter) => dispatch => {
  const condition = {
    'page[number]': page,
    'agg[size]': -1,
    'filter[channel]': "channel",
    'page[size]': 10
  }
  id && (condition['filter[id]'] = id)
  title && (condition['filter[title]'] = title)
  sorter && sorter !== 'undefined' && (condition['sort'] = sorter)
  return dispatch({
    type: "types.FILTER_RECOMMEND",
    promise: api.filterRecommendsData({
      params: condition
    })
  })
}