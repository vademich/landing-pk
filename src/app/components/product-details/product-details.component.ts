import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./dialog.do1439px.less', './dialog.c1440px.less']
})
export class ProductDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
}
