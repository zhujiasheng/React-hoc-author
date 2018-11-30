/**
 * Created by Thomas on 2018/11/7.
 */
import PropTypes from 'prop-types'
import React, {Component} from 'react'
import echarts from "echarts";
import {setPieData} from '../../assets/toolFun'
import classNames from 'classnames'
import { DatePicker, List  } from 'antd-mobile';
import "../../assets/css/Purchase.scss";


const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

var min = new Date();
min.setFullYear(min.getFullYear() - 3);
let minDate = min;
const maxDate = new Date(nowTimeStamp);

class Purchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: now,
      maxDate: maxDate,
    }
    this.nextMonth = this.nextMonth.bind(this)
    this.prevMonth = this.prevMonth.bind(this)
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchPurchaseList()

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echartsBox'));
    // 绘制图表
    myChart.setOption({
      series: [
        {
          name: "进货码洋",
          type: "pie",
          radius: ["50%", "80%"],
          center: ["50%", "55%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "16",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[
            {value:235, name:'视频广告20%'},
            {value:274, name:'联盟广告20%'},
            {value:310, name:'邮件营销14%'},
            {value:335, name:'直接访问18%'},
            {value:400, name:'搜索引擎19%'}
          ]
        }
      ],
      grid: {
        top: 0,
        bottom: -20,
        containLabel: true
      },
      title: {
        text: "",
        left: "center",
        top: "0",
        bottom: "0",
        textStyle: {
          fontSize: 16,
          color: "rgb(67, 67, 67)"
        }
      }
    })

  }

  timeDate(date) {
    let data = date.toLocaleDateString('zh-CN')
   return data.slice(0, -2)
  }
  nextMonth() {
    console.log(this.state.date)
    let newYear = this.state.date.getFullYear()
    let newMonth = this.state.date.getMonth() + 1
    console.log(newYear, newMonth)
    let newDate = new Date(newYear, newMonth)
    // console.log(newDate)
    this.setState({
      date: newDate
    })
  }
  prevMonth() {
    let newYear = this.state.date.getFullYear()
    let newMonth = this.state.date.getMonth() - 1

    let newDate = new Date(newYear, newMonth)
    this.setState({
      date: newDate
    })
  }


  render() {
    console.log(this.props)
    let option = {
      series: [
        {
          name: "进货码洋",
          type: "pie",
          radius: ["50%", "80%"],
          center: ["50%", "55%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "16",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data:[

          ]
        }
      ],
      grid: {
        top: 0,
        bottom: -20,
        containLabel: true
      },
      title: {
        text: "",
        left: "center",
        top: "0",
        bottom: "0",
        textStyle: {
          fontSize: 16,
          color: "rgb(67, 67, 67)"
        }
      }
    }
    const data = this.props.listData.data.List
    console.log(data)
    setPieData(option, data, "")
    return (
      <div className="purchase-wrap">
        <div className="time-select border-b">
          <div className="prev-month" onClick={this.prevMonth}>
            <i className="icon-prev"/>
            <p>上一月</p>
          </div>
          <i className="icon-date"/>
          <DatePicker
            className="date-box"
            mode="month"
            title="选择时间"
            extra="Optional"
            format={date => this.timeDate(date)}
            value={this.state.date}
            minDate={minDate}
            maxDate={maxDate}
            onChange={date => this.setState({ date })}
          >
            <List.Item arrow="horizontal"/>
          </DatePicker>
          <div className="next-month" onClick={this.nextMonth}>
            <p>下一月</p>
            <i className="icon-next"/>
          </div>
        </div>

        <div className="purchase-chart">
          <div id="echartsBox"></div>
        </div>
      </div>
    )
  }
}

Purchase.propTypes = {
  assistants: PropTypes.array,
}

export default Purchase
