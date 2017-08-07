import { Injectable } from "@angular/core";

import {Http, Response, Headers, RequestOptions, Request} from '@angular/http';
import {IMenu} from '../../../common/moaMenu/menu.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MOAMenuService{
    constructor(private http:Http){}

    private menuUrl='assets/data/sys-menu.json';

    getMenu():Promise<IMenu[]>{
        let url=`${this.menuUrl}`;
        return this.http.get(url).toPromise().then(res=>{return res.json()}).catch(this.handleError);
    }

      private handleError(error: Response | any) {
    let errMsg: string;
    if (error.status == 0) {
      errMsg = `The Reqeuest could not be send request, please check the API Server`;
    } else if (error._body.substring(0, 1) == '{') {
      const err = JSON.parse(error._body).defaultMessage || 'Unknow error';
      if (error.status >= 500) {
        errMsg = `${error.status} ${error.statusText} ${err}|warn`;
      } else if (error.status == 403) {
        errMsg = `${error.status} ${error.statusText} ${err}|info`;
      } else {
        errMsg = `${error.status} ${error.statusText} ${err}|error`;
      }
    } else {
      if (error.status >= 500) {
        errMsg = `${error.status} ${error.statusText} Server over time|warn`;
      } else {
        errMsg = `${error.status} ${error.statusText} Server inner error|error`;
      }
    }

    return Promise.reject(errMsg);
  }

}