import { Component,OnInit } from '@angular/core';
import { CommonService } from './../commonService';
import { HttpService } from './../../services/httpservice';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  templateUrl: 'forgot-password.html'
})
export class ForgotPwdComponent implements OnInit {
  data: any;
  success: boolean = false;
  failed:boolean =false;
  token:any;
  rptpassword:string;
  userpassword:string;
  temp:boolean=false;
  invalidmsg:string;
  constructor(private router: Router,private activatedRoute:ActivatedRoute, private commonService: CommonService, private httpHelperService: HttpService) { }

  
  ngOnInit() {
      this.activatedRoute
      .queryParams
      .subscribe(params => {
         this.token = params['token'];
         this.temp =Boolean(params['temp']); 
      });
     
  }

  UpdatePassword(form) {
    this.failed =false;
    this.success =false;
    if(form.controls.rptpassword && form.controls.password && form.controls.rptpassword.value =="" || form.controls.password.value =="") {
      this.invalidmsg = "password shouldn't empty";
      this.failed = true;
      return;
    } else {
      this.failed = false;
    }
    if(form.controls.rptpassword && form.controls.password && 
    form.controls.rptpassword.value!== form.controls.password.value) {
      this.invalidmsg = "Password do not match";
      this.failed = true;
      return;
    }
    this.data = {
      confirmPassword: form.controls.rptpassword.value,
      remember:this.token,
      newPassword:form.controls.rptpassword.value,
      temp:this.temp
    }
    this.httpHelperService.post('changePassword', this.data).subscribe(data => {
      if (data.error !== "False") {
        this.failed =true;
        this.invalidmsg=data.message;
        return
      } else {
        this.success = true;
      }
    });

  }
  Register() {
    this.router.navigate(['/Register'])
  }
}


