import { Component, Input, OnInit, Optional } from '@angular/core';
import { WrapperS } from '../wrapper/wrapper.component'

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  themeName = 'default';
  
  constructor(@Optional() public wrapperS?: WrapperS ) {
    this.themeName = this.wrapperS?.themeName;
   }

  ngOnInit(): void {
  }

}
