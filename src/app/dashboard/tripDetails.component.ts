import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './../../services/httpservice';
import { CommonService } from './../commonService'
import { Observable } from "rxjs";
import 'rxjs/Rx';


@Component({
  templateUrl: 'tripDetails.component.html'
})
export class TripDetailsComponent implements OnInit {
  dashboard:any={}
  showchart:boolean=false;
  chartData:any[]
  chart:boolean=true;
  phone:any;
  invalid:any;cl
  grid:any;
  stacked:any;
  gb:any;
  referalAmt:any;
  date1: any;
  username:any;
  role:String="0";
  myForm:any;
  constructor( private router: Router,private httpService:HttpService, private commonService: CommonService ) { 
  //  this.LoadChart();
  this.date1=new Date();
  }

  

  public chartHovered(e:any):void {
    console.log(e);
  }
  book(book){
    this.commonService.Loader(true);
   
    this.httpService.post('travelService/book',book).subscribe(data => {
       //this.filterGrid(data);
       console.log(data);
       this.commonService.Loader(false);
    }, error => {
      this.commonService.Loader(false);
    });
  }
  dashBoard(data) {
    
    data.potOneAmount, data.potwoAmount
    , data.potThreeAmount, data.potFourAmount, data.potFiveAmount,data.potSixAmount,
    data.potSevenAmount

  }

  filterGrid(data){
      if(data.merchantList) {
       
      }
   
    this.dashboard = data;
    
  }
  Register(form)
  {
    this.commonService.Loader(true);
    let parms={
       startDate:this.date1,
       EndDate:new Date(),
       tripLocation:this.username
    }
    this.httpService.post('travelService/tripInsert',parms).subscribe(data => {
       //this.filterGrid(data);
       console.log(data);
       this.commonService.Loader(false);
    }, error => {
      this.commonService.Loader(false);
    });
  }
 
 
  ngOnInit(): void {
    this.role=window.localStorage.role;
    this.commonService.Loader(true);
    this.httpService.get('travelService/tripDetails').subscribe(data => {
      this.grid=data.message;
      this.dashboard.count=data.bcount;
       this.commonService.Loader(false);
    }, error => {
      this.commonService.Loader(false);
    });

   
    //generate random values for mainChart
   
  }
}
