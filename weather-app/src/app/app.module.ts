import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeatherComponent} from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { AngularWeatherWidgetModule } from 'angular2-weather-widget';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    AngularWeatherWidgetModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
