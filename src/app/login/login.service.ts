import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions,Request } from "@angular/http";
import  "rxjs/add/operator/catch";    
import 'rxjs/add/operator/toPromiese';



import { Ajax } from "../common/ajax";

@Injectable()
export class LoginService{

    constructor(public ajax:Ajax){}

    handlerJson(res:Response){
        let body=res.json();
        return body || {};
    }
}