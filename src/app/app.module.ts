import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CountryModule } from './country/country.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CountryModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
