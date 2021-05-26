import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuReportingPowerBiViewElementState {}

export class LcuReportingPowerBiViewContext extends LCUElementContext<LcuReportingPowerBiViewElementState> {}

export const SELECTOR_LCU_REPORTING_POWER_BI_VIEW_ELEMENT = 'lcu-reporting-power-bi-view-element';

@Component({
  selector: SELECTOR_LCU_REPORTING_POWER_BI_VIEW_ELEMENT,
  templateUrl: './power-bi-view.component.html',
  styleUrls: ['./power-bi-view.component.scss']
})
export class LcuReportingPowerBiViewElementComponent extends LcuElementComponent<LcuReportingPowerBiViewContext> implements OnInit {
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
