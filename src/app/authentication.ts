import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CommonService } from './commonService';

@Injectable()
export class Authentication implements CanActivate {
    constructor(private router: Router,private commonService:CommonService) { }
    canActivate() {
        if (window.localStorage.getItem('userLoggedIn')!="false") {
            return true;
        }
        this.router.navigate(['']);
        return false;
    }
}