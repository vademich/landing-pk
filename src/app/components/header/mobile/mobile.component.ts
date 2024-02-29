import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-mobile',
  animations: [
    trigger('menuclick', [
      state('collapse', 
      style({
        'transform': 'translateY(-120%)',
      })),
      state('expand',
      style({
        'transform': 'translateY(0%)',
      })),
      transition( 'collapse => expand', [animate('0.4s ease-in-out')]),
      transition( 'expand => collapse', [animate('0.4s ease-in-out')]),
    ]),
    trigger('line1', [
      state('cross',
      style({
        transform: 'rotate(45deg) translate(25%, 165%)'
      })),
      transition('* => cross', [animate('0.3s')]),
      transition('cross => *', [animate('0.3s')])
    ]),
    trigger('line2', [
      state('cross',
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      transition('* => cross', [animate('0.1s')]),
      transition('cross => *', [animate('0.1s')])
    ]),
    trigger('line3', [
      state('cross',
      style({
        transform: 'rotate(-45deg) translate(25%, -165%)'
      })),
      transition('* => cross', [animate('0.3s')]),
      transition('cross => *', [animate('0.3s')])
    ])
  ],
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.less']
})
export class MobileComponent {

  menuClicked = false;
  menuShowHide() {
    this.menuClicked = !this.menuClicked;
  }

}
