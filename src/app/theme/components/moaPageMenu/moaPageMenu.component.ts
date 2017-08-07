import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { trigger,state,style,animate,transition } from "@angular/animations";

import { IMenu,IMessage } from "../../../common/moaMenu/menu.model";
import { MOAMenuService } from "../../services/moaMenu/moaMenu.service";
@Component({
    selector:'moa-page-menu',
    templateUrl:'./moaPageMenu.html',
    styles:['./moaPageMenu.scss'],
    animations:[
        trigger('menuState', [
      state('inactive', style({
        left: '0px'
      })),
      state('active', style({
        left: '-110px'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ]),
    trigger('routerState', [
      state('inactive', style({
        marginLeft: '170px'
      })),
      state('active', style({
        marginLeft: '50px'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ]),
    trigger('imgState', [
      state('inactive', style({
        left: '16px'
      })),
      state('active', style({
        left: '123px'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
    ]
})


export class MOAPageMenuComponent implements OnInit
{
    constructor(private menuService:MOAMenuService){}

    ngOnInit(){
      this.getMenu();
    }

    menus:IMenu[];
    msgs:IMessage[];
    menuMsg:string;
    state: string = 'inactive';                      
    pTooltipIf: boolean = false;    

    getMenu(){
        console.log("test");
        this.menuService.getMenu().then(menus=>this.menus=menus, error=>{
            this.menuMsg='Get the menus falis, please enter F5 to refresh the server and try again.'
        }).then(()=>{
            this.menuMsg="get the menus successfully."
        })
    }

     changeMenuWidth() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
    //dom操作
    let fa = document.getElementsByClassName('ui-accordion-header');
    if (this.state == 'active') {
      for (let i = 0; i < fa.length; i++) {
        fa[i].getElementsByTagName('span')[0].style.display = 'none';
      }
      this.pTooltipIf = true;
    } else {
      for (let i = 0; i < fa.length; i++) {
        fa[i].getElementsByTagName('span')[0].style.display = 'block';
      }
      this.pTooltipIf = false;
    }
  }
}