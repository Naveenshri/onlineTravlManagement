import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EqualValidator } from './../common/validation'
import { HttpService } from './../../services/httpservice';
import { CommonService } from './../commonService';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  failed: Boolean = false
  invalid: boolean = false;
  invalidmsg: string;
  spName:string;
  sucessmsg: any;
  success: boolean = false;
 
  preRegister: boolean = false;
  isLoader:boolean = false;
  personSales:any;
  username:string;
  sponserId: string;
  email: string;
  userpassword: string;
  rptpassword: string;
  noOfPurchase: string;
  rfName:string;
  phone: string;
  amount: string="35";
  refernceId: string;
  agree:boolean=false;
  isCompleted:boolean=false;
  userList:Array<any>=[];
 
  constructor(private router: Router,private activatedRoute:ActivatedRoute, private httpHelperService: HttpService, private commonService: CommonService) { }
  ngOnInit() {
  //  this.loadData();

  
   
  }




 



  tempRegister(form) {
this.invalid=false;
    this.invalidmsg='';
    if(!form.controls.email.valid){
      this.invalid = true;
      this.invalidmsg = "Invalid maild Id";
      return;
    }
    if(form.controls.phone.value.length <10){
      this.invalid = true;
      this.invalidmsg = "Invalid mobile number";
      return;
    }
    if(form.controls.rptpassword.value.length <6){
      this.invalid = true;
      this.invalidmsg = "Password should contain 6 characters";
      return;
    }
       let register = {
      //address2: form.controls.address2 && form.controls.address2.value == undefined ? '' : form.controls.address2.value,
      username: form.controls.username.value,
      email: form.controls.email.value,
      phone: form.controls.phone && form.controls.phone.value ?form.controls.phone.value  : '0',
      password: form.controls.rptpassword.value,
      // address1: form.controls.address1 && form.controls.address1.value== undefined ? '' : form.controls.address1.value
    }
    this.httpHelperService.post('authenticationService/onlineRegister', register).subscribe(data => {
      if (data.error !== "False") {
        this.invalid = true;
        this.invalidmsg = data.message;
        return;
      } else {
        this.invalid = false;
        this.success = true;
     
      }

    });
  }
  



}
