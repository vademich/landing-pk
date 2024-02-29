import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */

@Component({
  selector: 'app-footer',
  animations: [
    trigger('pk-load', [
      state('on', 
      style({
        width: '100%'
      })),
      state('off', 
      style({
        width: '0%'
      })),
      transition('on => off', [animate('0.25s')]),
    ]),
    trigger('pk-swipe', [
      state('on', 
      style({
        transform: 'translateX(-32px)'
      })),
      state('off', 
      style({
        transform: 'translateX(0px)'
      })),
      transition('on => off', [animate('0.25s')]),
    ]),
    trigger('tel-load', [
      state('on', 
      style({
        width: '100%'
      })),
      state('off', 
      style({
        width: '0%'
      })),
      transition('on => off', [animate('0.25s')]),
    ]),
    trigger('tel-swipe', [
      state('on', 
      style({
        transform: 'translateX(-32px)'
      })),
      state('off', 
      style({
        transform: 'translateX(0px)'
      })),
      transition('on => off', [animate('0.25s')]),
    ]),
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[А-я A-z]*$")
  ]);
  telFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("^[0-9+]*$")
  ])

  matcher = new MyErrorStateMatcher();
  ooopk = `ooopk0001@yandex.ru`;
  tel = `8 (995) 146 81 45`;

  pkload = false;
  telswiped = false;
  swipePk() {
    this.pkload = !this.pkload;
  }
  swipeTel() {
    this.telswiped = !this.telswiped;
  }
}
