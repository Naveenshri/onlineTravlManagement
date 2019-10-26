import { Injectable, Injector } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CommonService } from './../app/commonService';


@Injectable()
export class HttpService {

    private router: Router;

    constructor(private http: Http, private commonService: CommonService) { }
    get(url: string, headers?: Headers, ...params): Observable<any> {
        const self = this;
        if (params.length > 0) {
            return this.http.get(CommonService.baseUrl +
                this.formatUrl(url, ...params), this.getRequestOptions(headers))
                .map(this.responseExtract);
        } else {
            return this.http
                .get(CommonService.baseUrl+ url, this.getRequestOptions(headers))
                .map(this.responseExtract);
        }
    }

    post(url: string, body?: any, headers?: Headers): Observable<any> {
        const self = this;
        return this.http
            .post(CommonService.baseUrl+ url, body, this.getRequestOptions(headers))
            .map(this.responseExtract);
    }

    put(url: string, body: any, headers?: Headers): Observable<any> {
        const self = this;
        return this.http
            .put(CommonService.baseUrl+ url, body, this.getRequestOptions(headers))
            .map(this.responseExtract);
    }

    delete(url: string, headers?: Headers): Observable<Response> {
        const self = this;
        return this.http
            .delete(CommonService.baseUrl+ url, this.getRequestOptions(headers))
            .map(this.responseExtract);
    }

    getLocal(url: string, headers?: Headers): Observable<any> {
        const self = this;
        return this.http.get(url, this.getRequestOptions(headers))
            .map(this.responseExtract);
    }

    formatUrl(url, ...args) {
        for (let i = 0; i < args.length; i++) {
            url = url.replace(new RegExp('\\{' + i + '\\}', 'gi'), args[i]);
        }
        return url;
    }

    private getRequestOptions(headers: Headers): RequestOptions {
        return new RequestOptions({ headers: this.mixInHeaders(headers) });
    }

    private mixInHeaders(headers: Headers): Headers {
        let mixInHeaders: Headers = headers;
        if (!mixInHeaders) {
            mixInHeaders = new Headers();
        }
        if (!mixInHeaders.get('Content-Type')) {
            mixInHeaders.append( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            
            if( window.localStorage.token && window.localStorage.userLoggedIn &&  window.localStorage.userLoggedIn!=="false"){
                  mixInHeaders.append('Token', window.localStorage.token);
            }
        }
        return mixInHeaders;
    }

    private responseExtract(res: Response) {
        let body:any;
        if(res.text())
        {
        body = res.json();
        }
        return body || {};
    }
}
