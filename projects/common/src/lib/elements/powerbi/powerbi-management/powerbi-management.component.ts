import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuReportingPowerbiManagementElementState {}

export class LcuReportingPowerbiManagementContext extends LCUElementContext<LcuReportingPowerbiManagementElementState> {}

export const SELECTOR_LCU_REPORTING_POWERBI_MANAGEMENT_ELEMENT = 'lcu-reporting-powerbi-management-element';

@Component({
  selector: SELECTOR_LCU_REPORTING_POWERBI_MANAGEMENT_ELEMENT,
  templateUrl: './powerbi-management.component.html',
  styleUrls: ['./powerbi-management.component.scss']
})
export class LcuReportingPowerbiManagementElementComponent extends LcuElementComponent<LcuReportingPowerbiManagementContext> implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
