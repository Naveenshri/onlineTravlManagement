import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash'

export class CommonService {
    public memberList:any[]

    isAdmin:boolean;
     isTemp:boolean;
    public static baseUrl="https://mes.myeverydayshopping.com/v1/";
    //public static baseUrl="https://api.myeverydayshopping.com/v1/";
    public loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    constructor() {
        if(!window.localStorage.isAdmin || window.localStorage.isAdmin!="null") {
            this.isAdmin = window.localStorage.isAdmin;
      }
      
    }
    Loader(text:boolean) {
        this.loader.next(text);    
        
    }
 


   
}