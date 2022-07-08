import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const careChart = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('care-chart', careChart);
  }

}
