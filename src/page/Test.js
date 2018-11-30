/**
 * Created by Thomas on 2018/10/23.
 */

import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../store/test/actions";

import { Button } from "antd-mobile";

class Test extends Component {
  constructor() {
    super();
    this.updateData = this.updateData.bind(this);
  }

  updateData() {
    const { actions } = this.props;

    actions.updateImgTest();
    console.log(this.props);
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { data } = this.props;

    if (!data) {
      return (
        <div className="content">
          <div className="test">
            Start
            <a onClick={this.updateData} />
            {["1", "2", "3"].map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div>
            <Button type="ghost" inline className="am-button-borderfix">
              Start
            </Button>
          </div>
        </div>
      );
    }

    const {
      SupplierPurchaseCircularResponse: { FormatSumMy, List },
      SupplierPurchaseListResponse
    } = data;

    return (
      <div className="content">
        <div className="test">
          Start
          <a onClick={this.updateData} />
          {List.map((item, index) => (
            <p key={index}>{item.Supplier}></p>
          ))}
        </div>
        <div>
          <Button type="ghost" inline className="am-button-borderfix">
            Start
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.testReducer.data
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
)(Test);
