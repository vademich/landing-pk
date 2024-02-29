import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { IProducts } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-geography',
  animations: [
    trigger('point-1', [
      state('none',
      style({
        display: 'none'
      })),
      state('display',
      style({
        display: 'initial'
      })),
      transition('display => none', [animate('0ms')]),
      transition('none => display', [animate('0ms')]),
    ]),
    trigger('point-2', [
      state('none',
      style({
        display: 'none'
      })),
      state('display',
      style({
        display: 'initial'
      })),
      transition('display => none', [animate('0ms')]),
      transition('none => display', [animate('0ms')]),
    ]),
    trigger('point-3', [
      state('none',
      style({
        display: 'none'
      })),
      state('display',
      style({
        display: 'initial'
      })),
      transition('display => none', [animate('0ms')]),
      transition('none => display', [animate('0ms')]),
    ]),
    trigger('point-4', [
      state('none',
      style({
        display: 'none'
      })),
      state('display',
      style({
        display: 'initial'
      })),
      transition('display => none', [animate('0ms')]),
      transition('none => display', [animate('0ms')]),
    ]),
    trigger('point-5', [
      state('none',
      style({
        display: 'none'
      })),
      state('display',
      style({
        display: 'initial'
      })),
      transition('display => none', [animate('0ms')]),
      transition('none => display', [animate('0ms')]),
    ]),
    trigger('point-6', [
      state('none',
      style({
        display: 'none'
      })),
      state('display',
      style({
        display: 'initial'
      })),
      transition('display => none', [animate('0ms')]),
      transition('none => display', [animate('0ms')]),
    ]),
    trigger('point-7', [
      state('none',
      style({
        display: 'none'
      })),
      state('display',
      style({
        display: 'initial'
      })),
      transition('display => none', [animate('0ms')]),
      transition('none => display', [animate('0ms')]),
    ]),
    trigger('point-8', [
      state('none',
      style({
        display: 'none'
      })),
      state('display',
      style({
        display: 'initial'
      })),
      transition('display => none', [animate('0ms')]),
      transition('none => display', [animate('0ms')]),
    ]),
    trigger('point-9', [
      state('none',
      style({
        display: 'none'
      })),
      state('display',
      style({
        display: 'initial'
      })),
      transition('display => none', [animate('0ms')]),
      transition('none => display', [animate('0ms')]),
    ]),
    trigger('point-10', [
      state('none',
      style({
        display: 'none'
      })),
      state('display',
      style({
        display: 'initial'
      })),
      transition('display => none', [animate('0ms')]),
      transition('none => display', [animate('0ms')]),
    ]),
    trigger('point-11', [
      state('none',
      style({
        display: 'none'
      })),
      state('display',
      style({
        display: 'initial'
      })),
      transition('display => none', [animate('0ms')]),
      transition('none => display', [animate('0ms')]),
    ])
  ],
  templateUrl: './geography.component.html',
  styleUrls: ['./geography.component.less', './cards.less', './points.less']
})
export class GeographyComponent implements OnInit, OnDestroy {
  products: IProducts[];
  productsSubscription: Subscription;
  constructor (
    private ProductsService: ProductsService,
    private appSettingsService : ProductsService,
    public dialog: MatDialog
    ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = data.roadComplexes);
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) { this.productsSubscription.unsubscribe(); }
  }

  pk1 = false;
  pk2 = false;
  pk3 = false;
  pk4 = false;
  pk5 = false;
  pk6 = false;
  pk7 = false;
  pk8 = false;
  pk9 = false;
  pk10 = false;
  pk11 = false;
  showPk1(){this.pk1 = true;}
  showPk2(){this.pk2 = true;}
  showPk3(){this.pk3 = true;}
  showPk4(){this.pk4 = true;}
  showPk5(){this.pk5 = true;}
  showPk6(){this.pk6 = true;}
  showPk7(){this.pk7 = true;}
  showPk8(){this.pk8 = true;}
  showPk9(){this.pk9 = true;}
  showPk10(){this.pk10 = true;}
  showPk11(){this.pk11 = true;}

  hidePk1(){this.pk1 = false;}
  hidePk2(){this.pk2 = false;}
  hidePk3(){this.pk3 = false;}
  hidePk4(){this.pk4 = false;}
  hidePk5(){this.pk5 = false;}
  hidePk6(){this.pk6 = false;}
  hidePk7(){this.pk7 = false;}
  hidePk8(){this.pk8 = false;}
  hidePk9(){this.pk9 = false;}
  hidePk10(){this.pk10 = false;}
  hidePk11(){this.pk11 = false;}

  
  openDialog(product: IProducts) {
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: {
        name: product.name,
        comment: product?.comment,
        city: product.city,
        image: product.image,
        large: product.large,
        configure: {
            basicServices: {
                carWashing: product.configure?.basicServices?.carWashing,
                parking: product.configure?.basicServices?.parking,
                hotel: product.configure?.basicServices?.hotel,
                cafe: product.configure?.basicServices?.cafe,
                shower: product.configure?.basicServices?.shower,
                laundry: product.configure?.basicServices?.laundry,
                minimarket: product.configure?.basicServices?.minimarket,
                tireService: product.configure?.basicServices?.tireService,
                sauna: product.configure?.basicServices?.sauna,
                desinfection: product.configure?.basicServices?.desinfection
            },
            additiveServices: {
                wc: product.configure?.additiveServices?.wc,
                security: product.configure?.additiveServices?.security,
                cctv: product.configure?.additiveServices?.cctv,
                fencing: product.configure?.additiveServices?.fencing,
                barrier: product.configure?.additiveServices?.barrier,
                internet: product.configure?.additiveServices?.internet,
                wifi: product.configure?.additiveServices?.wifi,
                printer: product.configure?.additiveServices?.printer,
                waitingRoom: product.configure?.additiveServices?.waitingRoom,
                atm: product.configure?.additiveServices?.atm,
                paymentTerminal: product.configure?.additiveServices?.paymentTerminal,
                sparePartsStore: product.configure?.additiveServices?.sparePartsStore,
                autoAccessories: product.configure?.additiveServices?.autoAccessories,
                minimarket: product.configure?.additiveServices?.minimarket,
                pharmacy: product.configure?.additiveServices?.pharmacy,
                gasStation: product.configure?.additiveServices?.gasStation,
                pallets: product.configure?.additiveServices?.pallets,
                accumulatorCharging: product.configure?.additiveServices?.accumulatorCharging,
                starterCharger: product.configure?.additiveServices?.starterCharger,
                tachographRepair: product.configure?.additiveServices?.tachographRepair
            }
        }
      }
    });
  }
}
