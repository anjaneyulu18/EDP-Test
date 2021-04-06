import { Component } from '@angular/core';
import * as echarts from "echarts";

import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VendorDashbord';
  flag: any
  sidenavWidth = 4;
  // ngStyle: string;
  openFlag = 0
  public SchoolsArr = [{ "value": "" }, { "value": "Deeksha school" }, { "value": "New horizon school" }, { "value": "Oxford school" }, { "value": "Standford school" }, { "value": "Daccan school" }, { "value": "CBIT school" }]
  public Category = [{ "value": "Bags" }, { "value": "Uniform" }, { "value": "Books" }, { "value": "shoes" }, { "value": "tabs" }, { "value": "bottles" }]
  public ListArr = [{ "value": "Yearly" }, { "value": "Half Yearly" }, { "value": "Quarterly" }, { "value": "Monthly" }, { "value": "Weekly" }, { "value": "Today" }, { "value": "Date Range" }]
  public FullfillmentArr = [{
    "value": "cancel"
  }, {
    "value": "Return"
  }, {
    "value": "Pending"
  }]

  constructor(public http: HttpClient) {
  }
  ngOnInit() {
    this.flag = 'Ar'
    this.http.get("../assets/RevenueData.Json").subscribe(Resp => {
      console.log("Revenue Data", Resp)
      var yAxirArr: any
      yAxirArr = Resp
      var myChart2 = echarts.init((document.getElementById('stackedChart')) as any);
      var option2;
      option2 = {
        title: {
          text: 'Revenue Data By Month'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: yAxirArr.SeriesData
      };
      // option2 ={
      //   tooltip: {
      //       trigger: 'axis',
      //       axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      //           type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      //       }
      //   },
      //   legend: {
      //       data: ['Deeksha Store', 'Hyderabad Store', 'Rajaji Nagar Store']
      //   },
      //   grid: {
      //       left: '3%',
      //       right: '4%',
      //       bottom: '3%',
      //       containLabel: true
      //   },
      //   toolbox: {
      //     show: true,
      //     feature: {
      //         saveAsImage: {show: true}
      //     }
      // },
      //   xAxis: [
      //       {
      //           type: 'value'
      //       }
      //   ],
      //   yAxis:yAxirArr.YAxis,
      //   series: yAxirArr.SeriesData
      // };
      ;

      option2 && myChart2.setOption(option2);

    })

  }
  activeTab(value: any) {
    this.flag = value
  }
  openedChange(event:any){
console.log("EVENTTTT",event)
  }
  increase() {
    console.log("this.openFlag", this.openFlag)
    if (this.openFlag == 0) {
      this.openFlag = 1
      this.sidenavWidth = 18;
      console.log("increase sidenav width");
    } else {
      this.openFlag = 0
      this.sidenavWidth = 4;
      console.log("decrease sidenav width");
    }
  }
}
