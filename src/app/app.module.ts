import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileComponent } from './components/header/mobile/mobile.component';
import { MonitorComponent } from './components/header/monitor/monitor.component';
import { OurpkComponent } from './components/ourpk/ourpk.component';
import { GeographyComponent } from './components/geography/geography.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocProgComponent } from './components/soc-prog/soc-prog.component';
import { MainComponent } from './components/main/main.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    HeaderComponent,
    MobileComponent,
    MonitorComponent,
    OurpkComponent,
    GeographyComponent,
    FooterComponent,
    SocProgComponent,
    MainComponent,
    ClientsComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
