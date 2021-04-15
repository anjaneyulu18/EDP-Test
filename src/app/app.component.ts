import { Component } from '@angular/core';
import * as echarts from "echarts";

import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

sidenavArray:any;
  panelOpenState=false
  title = 'VendorDashbord';
  flag: any
  sidenavWidth = 4;
  // ngStyle: string;
  openFlag = 0 
  public SchoolsArr = [ { "value": "Deeksha school" }, { "value": "New horizon school" }, { "value": "Oxford school" }, { "value": "Standford school" }, { "value": "Daccan school" }, { "value": "CBIT school" }]
  public Category = [{ "value": "Bags" }, { "value": "Uniform" }, { "value": "Books" }, { "value": "shoes" }, { "value": "tabs" }, { "value": "bottles" }]
  public DateFilters = [{ "value": "Yearly" }, { "value": "Half Yearly" }, { "value": "Quarterly" }, { "value": "Monthly" }, { "value": "Weekly" }, { "value": "Today" }]
  public locationFilters = [{"value":"North"},{"value":"East"},{"value":"Weast"},{"value":"South India"}];
  public FullfillmentArr = [{
    "value": "Created"
  }, {
    "value": "Packed"
  },{
    "value": "shipped"
  },{
    "value": "cancelled"
  },{
    "value": "reattempt"
  },{
    "value": "Failed"
  }, {
    "value": "delivered"
  }]
public ProductsList = [{"value":"Uniform"},{"value":"Shoes"},{"value":"Books"},{"value":"Stationery"},{"value":"Accessories"},{"value":"Electronics"},{"value":"Services"}]
public ProductType = [{"value":"Formal"},{"value":"Sports"},{"value":"Socks"},{"value":"Text Books"},{"value":"Note books"},{"value":"Kit"},{"value":"Belts"},{"value":"Ties"},{"value":"Bloomers"},{"value":"Bags"},{"value":"Mask"},{"value":"Fitness Product"},{"value":"Tabs"},{"value":"Computers"},{"value":"Fees"}]
public ProductItems = [{"value":"Sweaters"},{"value":"Coat"},{"value":"Skirt"},{"value":"Frock"},{"value":"Top"},{"value":"Pinafore"},{"value":"Jacket"},{"value":"Pants"},{"value":"Shirts"},{"value":"Work Book"},{"value":"Record Book"},{"value":"Reading Program Fees"},{"value":"Assessment Fees  "},{"value":"Lab Fees"}]
public PGender = [{"value":"Male"},{"value":"Female"},{"value":"Unisex"}]
public SchoolsList = [{"value":""},{"value":""},{"value":""},{"value":""},{"value":""},]

  public inventoryArr=[{ "value": "Fast selling sku" }, { "value": "Low selling sku" }, { "value": "No inventory" }]
  constructor(public http: HttpClient) {
  }
  ngOnInit() {
// sidenav
this.http.get("../assets/sidenavData.json").subscribe(Resp=>{
  console.log("sidenav Data",Resp)
  this.sidenavArray = Resp;
  this.activeTab(this.sidenavArray[0].flag)
})






    this.flag = 'Ar'
     this. panelOpenState = true
this.http.get("../assets/SlowsellingData.json").subscribe(Resp=>{
  console.log("Inventory Data",Resp)
var InventoryChartData:any
InventoryChartData=Resp
  var myChart4 = echarts.init((document.getElementById('InventoryChart')) as any);
  var option4;
  
  option4 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {
            data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: InventoryChartData.yAxis,
        series: InventoryChartData.series
    };
  
  option4 && myChart4.setOption(option4);
})
    
this.http.get("../assets/InventoryData.json").subscribe(Resp=>{
  console.log("Inventory Data",Resp)
var InventoryChartData:any
InventoryChartData=Resp
  var myChart3 = echarts.init((document.getElementById('lineChart2')) as any);
  var option3;
  
  option3 = {
    title: {
        text: 'IV Status'
        
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Tabs', 'Shoes', 'Bags', 'Belts', 'Books']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
      show: true,
      feature: {
          saveAsImage: {show: true}
      }
  },
    xAxis: InventoryChartData.xAxis,
    yAxis: {
        type: 'value'
    },
    series: InventoryChartData.series
};
  
  option3 && myChart3.setOption(option3);
})
    this.http.get("../assets/RevenueData.Json").subscribe(Resp => {
      console.log("Revenue Data", Resp)
      var yAxirArr: any
      yAxirArr = Resp
      var myChart2 = echarts.init((document.getElementById('stackedChart')) as any);
      var option2;
      option2 = {
        title: {
          // text: 'Revenue Data By Month'
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
