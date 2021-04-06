import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VendorDashbord';
  flag:any
  sidenavWidth = 4;
  // ngStyle: string;
  openFlag=0
constructor(){
}
ngOnInit(){
  this.flag ='Ar'

}
activeTab(value:any){
  this.flag=value
}

  increase() {
    console.log("this.openFlag",this.openFlag)
    if(this.openFlag == 0){
      this.openFlag=1
      this.sidenavWidth = 18;
      console.log("increase sidenav width");
    }else{
      this.openFlag = 0
      this.sidenavWidth = 4;
      console.log("decrease sidenav width");
    }
  }}
