import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './../commonService';
import { HttpService } from './../../services/httpservice';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  username:any;
  data: any;
  success: boolean = false;
  failed:boolean =false;
  isLoader:boolean =false;
  password:string
  constructor(private router: Router, private commonService: CommonService, private httpHelperService: HttpService) { }
  ngOnInit() {
    if(window.localStorage.getItem('userLoggedIn')) {
      this.router.navigate(['dashboard']);
    }

  }
  private _buildParams(params: any) {
    let urlSearchParams = new URLSearchParams();

    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        urlSearchParams.append(key, params[key]);
      }
    }
    return urlSearchParams.toString();
  }
  Login(username, password) {
     this.failed =false;
   
    this.data = {
      email: username,
      password: password
    }
  
    let order = { name: 'naveen' }
    this.isLoader = true;
    this.httpHelperService.post('bookingService/login', this.data).subscribe(data => {
      if (data.error !== "False") {
        this.failed =true;
      } else {
        this.success = true;
       
        window.localStorage.token = data.token;
        window.localStorage.temp = data.temp;
        window.localStorage.role = data.role;
      
        this.router.navigate(['dashboard'])
       
        
        window.localStorage.userLoggedIn = true;
        console.log(data);
      }
      this.isLoader = false;
    },error=>{
      this.isLoader = false;
   });

  }

   pad(n, len) {
     let s = n.toString();
     if (s.length < len) {
         s = ('0000000000' + s).slice(-len);
     }
     return s;
  }
  focusOutFunction(){
    if( Number(this.username) > 0){

       if(this.username && this.username.indexOf('My')!=0 &&  this.username.indexOf('My')!=0){
      this.username = 'My'+this.pad(this.username,6);
    }  if(this.username &&  this.username.indexOf('My') > 0) {
      this.username=this.username.slice(2);
      this.username = 'My'+this.pad(this.username,6);
    }
  }
  }
  
  
  Register() {
    this.router.navigate(['/Register'])
  }
  forgotpassword() {
     this.router.navigate(['/ResetPassword'])
  }
}
