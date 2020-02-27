import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FathymSharedModule, MaterialModule, LCUServiceSettings } from "@lcu/common";
import { LcuService } from "./services/lcu.service";
import { LcuComponent } from "./controls/lcu/lcu.component";
import { LcuDirective } from "./directives/lcu.directive";
import { LcuReportingPowerbiManagementElementComponent } from "./elements/powerbi/powerbi-management/powerbi-management.component";
import { PowerBIManageModel } from "./models/powerbi-manage.model";
import { ReportingManagementStateContext } from "./state/reporting-management-state.context";
import { ReportingManagementState } from './state/reporting-management.state';
import { LcuReportingPowerbiViewElementComponent } from './elements/powerbi/powerbi-view/powerbi-view.component';

@NgModule({
  declarations: [
    LcuComponent,
    LcuDirective,
    LcuReportingPowerbiManagementElementComponent,
    LcuReportingPowerbiViewElementComponent,
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
    LcuReportingPowerbiManagementElementComponent,
    LcuReportingPowerbiViewElementComponent,
  ],
  entryComponents: [LcuReportingPowerbiManagementElementComponent, LcuReportingPowerbiViewElementComponent,]
})
export class LcuReportingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuReportingModule,
      providers: [ReportingManagementStateContext, LcuService, LCUServiceSettings]
    };
  }
}
