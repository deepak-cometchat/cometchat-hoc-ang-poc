import { Component, forwardRef, Input, OnInit, Optional, SkipSelf } from '@angular/core';


export class WrapperS {
  themeName: any;
}

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  providers: [{ provide: WrapperS, useExisting: forwardRef(() => WrapperComponent) }],
})
export class WrapperComponent implements OnInit {

  @Input() themeName: any;

  constructor() { }

  ngOnInit(): void {
  }

}



