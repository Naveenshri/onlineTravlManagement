/* tslint:disable:no-unused-variable */
import { DashboardComponent } from './dashboard.component';

import { TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By }             from '@angular/platform-browser';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpService } from './../../services/httpservice';
import { CommonService } from './../commonService'
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});
export class MockServiceFacadeLayer {    
    GetCustomerDetails: any = [];
    GetLabelList: any = [];
    navigate: any;
    labelInventory={nextLabelName:"",selectedEntitlement:[{test:""}],panelDetails:[],entitlementList:{customers:[{entitlements:{}}]},customerDetails:{corpId:""},userDetails:{racfId:""}, selectedItems:{labelId:""},labelTypeList:"",labelList:{nextNumberKey :""}};

    corpIdList$ = Observable.create((observer: Observer<any>) => {
                observer.next([]);
    });
    getNodeTypes$ = Observable.create((observer: Observer<any>) => {
                observer.next({});
    });
}
export class MockRouterLayer{

    
//     public events = new Observable(observers => {
       
//     observers.next(this.ne);
//     observers.complete();
//   });
    public events ={
        filter: this.filter 
    }
    public filter(event){
        
        return new Observable(observers => {
            
            observers.next(null);
            observers.complete();
        });
    }
 
}
describe('AppComponent with TCB', function () {
  let component: any;
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [DashboardComponent],
        providers: [
            { provide: CommonService, useClass: MockServiceFacadeLayer },
            { provide: HttpService, useClass: MockServiceFacadeLayer },
            { provide: Router, useClass: MockRouterLayer },
            { provide: ActivatedRoute,  useValue: {
                    activeRoute: function () {
                        return true;
                    }
                } },
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should instantiate component', () => {
    component = TestBed.createComponent(DashboardComponent);
   
    expect(component.componentInstance instanceof DashboardComponent).toBe(true, 'should create AppComponent');
  });

  it('should  call ngOnInit', () => {
    component.ngOnInit();
   
  });
 
});
