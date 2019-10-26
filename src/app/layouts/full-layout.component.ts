import { Component, OnInit } from '@angular/core';
import { CommonService } from './../commonService'
import { Router } from '@angular/router';
import { HttpService } from './../../services/httpservice';
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";


@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
   
  constructor(private commonService:CommonService, private router:Router,private httpService:HttpService) { }

  public disabled:boolean = false;
  isAdmin:boolean=false;
  isTemp:boolean=true;
  notify:string;
  walletNotification:any;
  walletAmt:any;
  public status:{isopen:boolean} = {isopen: false};
  messages:any[]
  loader:boolean=false;
  walletcnt:string;
  userInfo:any={};
  public toggled(open:boolean):void {
  
   
  }
  clickNotify(){
    
  }
   clickNotify1(){
      this.httpService.get('admin/walletNotifyUpdate').subscribe(data => {
          this.loadMessages();
    });
  }
  loadMessages(){
    this.httpService.get('admin/getWallet').subscribe(data => {
      this.walletAmt=data.message?data.message:0;
      this.walletNotification=data.notification;
      this.walletcnt=data.walletcnt;
    });
    this.httpService.get('admin/getNotify').subscribe(data => {
          this.messages=data.message;
          this.notify=data.notify
    });

    
  
  }




  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    if(window.localStorage.userInfo){
      this.userInfo =JSON.parse(window.localStorage.userInfo);
    }
   
    this.loadMessages();
    let newobs = Observable.interval(2000000).take(1).map(x => x*1);
    
    let newsub = newobs.subscribe(x => {
      console.log('TESTTIMER');
      window.localStorage.userLoggedIn = false;
      window.localStorage.token =null;
      this.router.navigate(['']);
    });
     this.commonService.loader.subscribe(data => {
       if(data!=null) {
         this.loader=data;
       }
    });
    if(!window.localStorage.token || window.localStorage.token=="null") {
       window.localStorage.userLoggedIn = false;
      window.localStorage.token =null;
      this.router.navigate(['']);
    }
    if(!window.localStorage.isAdmin || window.localStorage.isAdmin!="null") {
          this.isAdmin =window.localStorage.isAdmin=="false"?false:true;
          this.commonService.isAdmin = this.isAdmin;

    }
    if(window.localStorage.temp) {
          this.isTemp =window.localStorage.temp=="true"?false:true;
          this.commonService.isTemp = this.isTemp;

    }
  }
  logout(){
      window.localStorage.userLoggedIn = false;
      window.localStorage.token =null;
      window.localStorage.userInfo=null;
      window.localStorage.temp=null;
      window.localStorage.isAdmin=null;
      this.router.navigate(['']);
  }
}
