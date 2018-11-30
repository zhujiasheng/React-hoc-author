/**
 * Created by Thomas on 2018/11/7.
 */
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../../store/purchase/actions'
import Purchase from './Purchase'


const mapStateToProps = state => {

  return {
    listData: state.purchaseListData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Purchase)
