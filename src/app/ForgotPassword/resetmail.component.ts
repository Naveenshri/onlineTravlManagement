import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './../commonService';
import { HttpService } from './../../services/httpservice';

@Component({
  templateUrl: 'resetmail.component.html'
})
export class ResetmailComponent implements OnInit {
  data: any;
  success: boolean = false;
  failed:boolean =false;
  email:string;
  invalidmsg:any;
  temporary:boolean=false;
  constructor(private router: Router, private commonService: CommonService, private httpHelperService: HttpService) { }
  
  ngOnInit() {

  }

  UpdatePassword(form) {
     this.failed =false;
     this.success =false;
    this.data = {
      email: form.controls.email.value,
      temp: this.temporary
    }
   
    this.httpHelperService.post('forgotPassword', this.data).subscribe(data => {
      if (data.error !== "False") {
        this.failed =true;
        this.invalidmsg =data.message;
      } else {
          this.success =true;
      }
    });

  }

}
