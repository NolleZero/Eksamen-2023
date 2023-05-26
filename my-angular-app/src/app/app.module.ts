import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Employee1Component } from './employee1/employee1.component';
import { Employee2Component } from './employee2/employee2.component';
import { Employee3Component } from './employee3/employee3.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { KartComponent } from './kart/kart.component';
import { TekstComponent } from './tekst/tekst.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { KontaktkjemaComponent } from './kontaktkjema/kontaktkjema.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Employee1Component,
    Employee2Component,
    Employee3Component,
    KartComponent,
    TekstComponent,
    FooterComponent,
    ContactFormComponent,
    
   
   
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    GoogleMapsModule,
    KontaktkjemaComponent,
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }


