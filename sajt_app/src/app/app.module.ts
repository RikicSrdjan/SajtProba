import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './Komponente/index/index.component';
import { NavbarComponent } from './Komponente/navbar/navbar.component';
import { PocetnaComponent } from './Komponente/pocetna/pocetna.component';
import { MjesavineComponent } from './Komponente/mjesavine/mjesavine.component';
import { TenktureComponent } from './Komponente/tenkture/tenkture.component';
import { KontaktComponent } from './Komponente/kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    PocetnaComponent,
    MjesavineComponent,
    TenktureComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
