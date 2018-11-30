/**
 * Created by Thomas on 2018/11/7.
 */
import PropTypes from 'prop-types'
import React, {Component} from 'react'

import classNames from 'classnames'


class Search extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

  }


  render() {

    return (
      <div>
        我是搜索页
      </div>
    )
  }
}

Search.propTypes = {
  assistants: PropTypes.array,
}

export default Search
