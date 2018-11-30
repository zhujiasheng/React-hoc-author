/**
 * Created by Thomas on 2018/11/7.
 */
import PropTypes from 'prop-types'
import React, {Component} from 'react'

import classNames from 'classnames'


class Sales extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

  }


  render() {

    return (
      <div>
        我是销售页
      </div>
    )
  }
}

Sales.propTypes = {
  assistants: PropTypes.array,
}

export default Sales
