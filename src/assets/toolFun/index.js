/**
 * Created by Thomas on 2018/10/23.
 */
// 工具函数

//转换饼状图的数据
export const setPieData = (option, data, isGys ) => {
  console.log(option, data, isGys)
  if(data === undefined) {
    data = []
  }
  let chartData = option.series[0].data;
  let txt = "";
  let percent = "";
  let val = "";
  let topTenPersent = 0;
  let topTenVal = 0;
  let isNeedConvert = false;

  data.map(item => (
      console.log(item)
  ))
}
