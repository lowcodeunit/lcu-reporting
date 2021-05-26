import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuReportingPowerBiViewElementComponent } from './elements/power-bi/power-bi-view/power-bi-view.component';

@NgModule({
  declarations: [LcuReportingPowerBiViewElementComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    // LazyElementModule,
  ],
  exports: [LcuReportingPowerBiViewElementComponent],
  entryComponents: [LcuReportingPowerBiViewElementComponent]
})
export class LcuReportingModule {
  static forRoot(): ModuleWithProviders<LcuReportingModule> {
    return {
      ngModule: LcuReportingModule,
      providers: []
    };
  }
}
