import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-kpos',
  templateUrl: './kpos.component.html',
  styleUrls: ['./kpos.component.scss']
})
export class KposComponent implements OnInit {
  CardsDAta:any;
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("../../assets/FullfilmentData.json").subscribe(Resp=>{
      console.log("this is data ",  Resp )
      this.CardsDAta = Resp
    })

  }

}
