import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProducts } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-ourpk',
  animations: [
    trigger('all', [
      state('true',
      style({
        'background-color': '#0045E6',
        'color': '#FFFFFF'
      })),
      state('false',
      style({
        'background-color': '#FFFFFF',
        'color': '#0045E6'
      }))
    ]),
    trigger('carWashing', [
      state('true',
      style({
        'background-color': '#0045E6',
        'color': '#FFFFFF'
      })),
      state('false',
      style({
        'background-color': '#FFFFFF',
        'color': '#0045E6'
      }))
    ]),
    trigger('parking', [
      state('true',
      style({
        'background-color': '#0045E6',
        'color': '#FFFFFF'
      })),
      state('false',
      style({
        'background-color': '#FFFFFF',
        'color': '#0045E6'
      }))
    ]),
    trigger('hotel', [
      state('true',
      style({
        'background-color': '#0045E6',
        'color': '#FFFFFF'
      })),
      state('false',
      style({
        'background-color': '#FFFFFF',
        'color': '#0045E6'
      }))
    ]),
    trigger('cafe', [
      state('true',
      style({
        'background-color': '#0045E6',
        'color': '#FFFFFF'
      })),
      state('false',
      style({
        'background-color': '#FFFFFF',
        'color': '#0045E6'
      }))
    ]),
    trigger('shower', [
      state('true',
      style({
        'background-color': '#0045E6',
        'color': '#FFFFFF'
      })),
      state('false',
      style({
        'background-color': '#FFFFFF',
        'color': '#0045E6'
      }))
    ]),
    trigger('laundry', [
      state('true',
      style({
        'background-color': '#0045E6',
        'color': '#FFFFFF'
      })),
      state('false',
      style({
        'background-color': '#FFFFFF',
        'color': '#0045E6'
      }))
    ]),
    trigger('minimarket', [
      state('true',
      style({
        'background-color': '#0045E6',
        'color': '#FFFFFF'
      })),
      state('false',
      style({
        'background-color': '#FFFFFF',
        'color': '#0045E6'
      }))
    ]),
    trigger('tireService', [
      state('true',
      style({
        'background-color': '#0045E6',
        'color': '#FFFFFF'
      })),
      state('false',
      style({
        'background-color': '#FFFFFF',
        'color': '#0045E6'
      }))
    ]),
    trigger('desinfection', [
      state('true',
      style({
        'background-color': '#0045E6',
        'color': '#FFFFFF'
      })),
      state('false',
      style({
        'background-color': '#FFFFFF',
        'color': '#0045E6'
      }))
    ])
  ],
  templateUrl: './ourpk.component.html',
  styleUrls: ['./ourpk.component.less']
})
export class OurpkComponent implements OnInit, OnDestroy {

  products: IProducts[];
  productsSubscription: Subscription;

  constructor( 
    private ProductsService: ProductsService,
    private appSettingsService : ProductsService,
    public dialog: MatDialog
    ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.filterByServices('all')
    }, 1000);
  }
  ngOnDestroy(): void {
    if (this.productsSubscription) { this.productsSubscription.unsubscribe(); }
  }
  
  filterByServices(service: string) {
    this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = data.roadComplexes);
    setTimeout(() => {
      this.filterByService(service)
    }, 10);
    this.changeColor(service);
  }

  filterByService(service: string) {
    if (service == "all")
    {
      let filter = this.products.filter(
        (obj) => {
          return obj;
        }
      )
      
      this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = filter);
    }
    else if (service == "carWashing")
    {
      let filter = this.products.filter(
        (obj) => {
          return obj.configure?.basicServices?.carWashing == true;
        }
      )
      
      this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = filter);
    }
    else if (service == "parking")
    {
      let filter = this.products.filter(
        (obj) => {
          return obj.configure?.basicServices?.parking == true;
        }
      )
      
      this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = filter);
    }
    else if (service == "hotel")
    {
      let filter = this.products.filter(
        (obj) => {
          return obj.configure?.basicServices?.hotel == true;
        }
      )
      
      this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = filter);
    }
    else if (service == "cafe")
    {
      let filter = this.products.filter(
        (obj) => {
          return obj.configure?.basicServices?.cafe == true;
        }
      )
      
      this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = filter);
    }
    else if (service == "shower")
    {
      let filter = this.products.filter(
        (obj) => {
          return obj.configure?.basicServices?.shower == true;
        }
      )
      
      this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = filter);
    }
    else if (service == "laundry")
    {
      let filter = this.products.filter(
        (obj) => {
          return obj.configure?.basicServices?.laundry == true;
        }
      )
      
      this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = filter);
    }
    else if (service == "minimarket")
    {
      let filter = this.products.filter(
        (obj) => {
          return obj.configure?.basicServices?.minimarket == true;
        }
      )
      
      this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = filter);
    }
    else if (service == "tireService")
    {
      let filter = this.products.filter(
        (obj) => {
          return obj.configure?.basicServices?.tireService == true;
        }
      )
      
      this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = filter);
    }
    else if (service == "desinfection")
    {
      let filter = this.products.filter(
        (obj) => {
          return obj.configure?.basicServices?.desinfection == true;
        }
      )
      
      this.productsSubscription = this.ProductsService.getJSON().subscribe(data => this.products = filter);
    }
  }
  all = true;
  carWashing = false;
  parking = false;
  hotel = false;
  cafe = false;
  shower = false;
  laundry = false;
  minimarket = false;
  tireService = false;
  desinfection = false;
  changeColor(service: string) {
    if (service == 'all') {
      this.all = true;
      this.carWashing = false;
      this.parking = false;
      this.hotel = false;
      this.cafe = false;
      this.shower = false;
      this.laundry = false;
      this.minimarket = false;
      this.tireService = false;
      this.desinfection = false;
    }
    else if (service == 'carWashing') {
      this.all = false;
      this.carWashing = true;
      this.parking = false;
      this.hotel = false;
      this.cafe = false;
      this.shower = false;
      this.laundry = false;
      this.minimarket = false;
      this.tireService = false;
      this.desinfection = false;
    }
    else if (service == 'parking') {
      this.all = false;
      this.carWashing = false;
      this.parking = true;
      this.hotel = false;
      this.cafe = false;
      this.shower = false;
      this.laundry = false;
      this.minimarket = false;
      this.tireService = false;
      this.desinfection = false;
    }
    else if (service == 'hotel') {
      this.all = false;
      this.carWashing = false;
      this.parking = false;
      this.hotel = true;
      this.cafe = false;
      this.shower = false;
      this.laundry = false;
      this.minimarket = false;
      this.tireService = false;
      this.desinfection = false;
    }
    else if (service == 'cafe') {
      this.all = false;
      this.carWashing = false;
      this.parking = false;
      this.hotel = false;
      this.cafe = true;
      this.shower = false;
      this.laundry = false;
      this.minimarket = false;
      this.tireService = false;
      this.desinfection = false;
    }
    else if (service == 'shower') {
      this.all = false;
      this.carWashing = false;
      this.parking = false;
      this.hotel = false;
      this.cafe = false;
      this.shower = true;
      this.laundry = false;
      this.minimarket = false;
      this.tireService = false;
      this.desinfection = false;
    }
    else if (service == 'laundry') {
      this.all = false;
      this.carWashing = false;
      this.parking = false;
      this.hotel = false;
      this.cafe = false;
      this.shower = false;
      this.laundry = true;
      this.minimarket = false;
      this.tireService = false;
      this.desinfection = false;
    }
    else if (service == 'minimarket') {
      this.all = false;
      this.carWashing = false;
      this.parking = false;
      this.hotel = false;
      this.cafe = false;
      this.shower = false;
      this.laundry = false;
      this.minimarket = true;
      this.tireService = false;
      this.desinfection = false;
    }
    else if (service == 'tireService') {
      this.all = false;
      this.carWashing = false;
      this.parking = false;
      this.hotel = false;
      this.cafe = false;
      this.shower = false;
      this.laundry = false;
      this.minimarket = false;
      this.tireService = true;
      this.desinfection = false;
    }
    else if (service == 'desinfection') {
      this.all = false;
      this.carWashing = false;
      this.parking = false;
      this.hotel = false;
      this.cafe = false;
      this.shower = false;
      this.laundry = false;
      this.minimarket = false;
      this.tireService = false;
      this.desinfection = true;
    }
  }

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
