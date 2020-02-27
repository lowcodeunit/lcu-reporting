import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';
import {
  LcuReportingModule,
  LcuReportingPowerbiManagementElementComponent,
  LcuReportingPowerbiViewElementComponent,
  SELECTOR_LCU_REPORTING_POWERBI_MANAGEMENT_ELEMENT
} from '@lowcodeunit/lcu-reporting-common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    LcuReportingModule.forRoot()
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: [LcuReportingModule]
})
export class AppModule implements DoBootstrap {
  constructor(protected injector: Injector) {}

  public ngDoBootstrap() {
    const powerbiManagement = createCustomElement(
      LcuReportingPowerbiManagementElementComponent,
      { injector: this.injector }
    )
    const powerbiView = createCustomElement(
      LcuReportingPowerbiViewElementComponent,
        {injector: this.injector}    
    );

    customElements.define(
      SELECTOR_LCU_REPORTING_POWERBI_MANAGEMENT_ELEMENT,
      powerbiManagement
    );
  }
}
