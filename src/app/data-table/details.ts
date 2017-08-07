import {Component, OnInit} from '@angular/core';
import {IMenu, IMessage, SelectItem} from '../common/moaMenu/menu.model';
import {beforeUrl, pageAnimation, China} from '../common/animation';
import {DataTableService} from './data-table.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './details.html',
  animations: [
    pageAnimation
  ]
})
export class Details implements OnInit {
  constructor(private myService: DataTableService, private route: ActivatedRoute) {
    
    console.log(route);

  }
  
  ngOnInit() {
    this.params = this.route.params;
    console.log(this.params.value.id);
  }
  
  params: any;
}
