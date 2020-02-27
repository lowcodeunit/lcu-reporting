import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FathymSharedModule, MaterialModule, LCUServiceSettings } from "@lcu/common";
import { LcuService } from "./services/lcu.service";
import { LcuComponent } from "./controls/lcu/lcu.component";
import { LcuDirective } from "./directives/lcu.directive";
import { LcuReportingPowerbiManagementElementComponent } from "./elements/powerbi/powerbi-management/powerbi-management.component";
import { PowerBIModel } from "./models/powerbi.model";
import { ReportingManagementStateContext } from "./state/reporting-management-state.context";
import { ReportingManagementState } from './state/reporting-management.state';

@NgModule({
  declarations: [
    LcuComponent,
    LcuDirective,
    LcuReportingPowerbiManagementElementComponent,
  ],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    LcuComponent,
    LcuDirective, 
    LcuReportingPowerbiManagementElementComponent
  ],
  entryComponents: [LcuReportingPowerbiManagementElementComponent]
})
export class LcuReportingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuReportingModule,
      providers: [ReportingManagementStateContext, LcuService]
    };
  }
}
