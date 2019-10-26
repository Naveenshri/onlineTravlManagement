import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../../services/httpservice';
import { CommonService } from './../commonService'
import { Observable } from "rxjs";
import 'rxjs/Rx';


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  dashboard:any={}
  showchart:boolean=false;
  chartData:any[]
  chart:boolean=true;
  userInfo:any;
  grid:any;
  stacked:any;
  gb:any;
  role:String="0";
  constructor( private router: Router,private httpService:HttpService, private commonService: CommonService ) { 
    if(window.localStorage.userInfo){
      this.userInfo =JSON.parse(window.localStorage.userInfo);
    }
  //  this.LoadChart();
  }








  
  ngOnInit(): void {
  
   
    this.role=window.localStorage.role;


    this.commonService.Loader(true);
    this.httpService.get('travelService/tripBooked').subscribe(data => {
      this.grid=data.message;
      this.dashboard.UserCount=data.bcount;
      this.dashboard.sp=data.bcount1;
       this.commonService.Loader(false);
    }, error => {
      this.commonService.Loader(false);
    });
    
    

    //generate random values for mainChart
   
  }
}
