/**
 * Created by Thomas on 2018/10/23.
 */

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../store/footTab/actions";

import "../assets/css/FootTab.scss";

class FootTab extends Component {
  constructor() {
    super();
    this.updateSelectTab = this.updateSelectTab.bind(this);
  }

  updateSelectTab(index) {
    const { actions } = this.props;
    actions.updateTabActive(index)
  }

  componentDidMount() {

  }

  render() {
    const tabArray = [
      {
        name: '进货',
        tabIndex: 1,
        link: '/purchase',
        iconClass: 'purchases'
      },{
        name: '销售',
        tabIndex: 2,
        link: '/sales',
        iconClass: 'sales'
      },{
        name: '库存',
        tabIndex: 3,
        link: '/stock',
        iconClass: 'stock'
      },{
        name: '搜索',
        tabIndex: 4,
        link: '/search',
        iconClass: 'search'
      }
    ]

    // console.log(this.props)

    const tabActive = this.props.data.data;

    return (
      <div className="common-tab">
        <ul className="common-tab-ul">
          {
            tabArray.map((item, index) =>
              <li
                key={item.tabIndex}
                className={classNames({
                  'active': tabActive === item.tabIndex
                })}
                onClick={this.updateSelectTab.bind(this, item.tabIndex)}
              >
                <Link to={item.link}>
                  <span className={`icon ${item.iconClass}`}/>
                  <p>{item.name}</p>
                </Link>
                </li>
            )
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.tabActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FootTab);
