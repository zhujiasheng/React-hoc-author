/**
 * Created by Thomas on 2018/11/7.
 */
import PropTypes from 'prop-types'
import React, {Component} from 'react'

import classNames from 'classnames'


class Stock extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

  }


  render() {

    return (
      <div>
        我是库存页
      </div>
    )
  }
}

Stock.propTypes = {
  assistants: PropTypes.array,
}

export default Stock
