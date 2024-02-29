import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-main',
  animations: [
    trigger('circle', [
      state('off', 
      style({
        transform: 'translateY(0px)',
      })),
      state('on', 
      style({
        transform: 'translateY(70px)',
      })),
      transition('on => off', [animate('0.2s')]),
      transition('off => on', [animate('0.2s')])
    ])
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent {
  isHover = false;
  circleHover() {
    this.isHover = !this.isHover;
  }

}
