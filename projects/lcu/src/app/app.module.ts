import { DoBootstrap } from '@angular/core';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {
  LcuReportingModule,
  LcuReportingPowerBiViewElementComponent,
} from '@lowcodeunit/lcu-reporting-common';
import { SELECTOR_LCU_REPORTING_POWER_BI_VIEW_ELEMENT } from '@lowcodeunit/lcu-reporting-common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FathymSharedModule,
  LCUServiceSettings,
  MaterialModule,
} from '@lcu/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppHostModule } from '@lowcodeunit/app-host-common';
import { environment } from '../environments/environment';
import 'zone.js/dist/zone';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule.forRoot(),
    MaterialModule,
    FlexLayoutModule,
    AppHostModule.forRoot(),
    LcuReportingModule.forRoot(),
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment),
    },
  ],
  exports: [],
})
export class AppModule implements DoBootstrap {
  constructor(protected injector: Injector) {}

  public ngDoBootstrap() {
    const powerBiView = createCustomElement(
      LcuReportingPowerBiViewElementComponent,
      { injector: this.injector }
    );

    customElements.define(
      SELECTOR_LCU_REPORTING_POWER_BI_VIEW_ELEMENT,
      powerBiView
    );
  }
}
