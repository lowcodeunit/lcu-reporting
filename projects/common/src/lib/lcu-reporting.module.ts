import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuService } from './services/lcu.service';

@NgModule({
  declarations: [],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [],
  entryComponents: []
})
export class LcuReportingModule {
  static forRoot(): ModuleWithProviders<LcuReportingModule> {
    return {
      ngModule: LcuReportingModule,
      providers: [LcuService]
    };
  }
}
