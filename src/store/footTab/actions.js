import * as actionType from '../constants/index'


export const updateTabActive = data => {
  return {
    type: actionType.UPDATE_TAB_ACTIVE,
    data: data
  }
}
