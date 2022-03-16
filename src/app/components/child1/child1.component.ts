import { Component, Input, OnInit, Optional, ViewContainerRef } from '@angular/core';
import { WrapperS } from '../wrapper/wrapper.component'

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  themeName = 'default';

  constructor(@Optional() public wrapperS?: WrapperS ) {
    this.themeName = this.wrapperS?.themeName;
   }


  ngOnInit(): void {

  }

}
