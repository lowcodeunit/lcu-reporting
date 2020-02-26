import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuReportingPowerbiViewElementState {
  public EmbedType: string;

  public ReportID: string;

  public DashboardID: string;

  public TileID: string;
}

export class LcuReportingPowerbiViewContext extends LCUElementContext<
  LcuReportingPowerbiViewElementState
> {}

export const SELECTOR_LCU_REPORTING_POWERBI_VIEW_ELEMENT =
  'lcu-reporting-powerbi-view-element';

@Component({
  selector: SELECTOR_LCU_REPORTING_POWERBI_VIEW_ELEMENT,
  templateUrl: './powerbi-view.component.html',
  styleUrls: ['./powerbi-view.component.scss']
})
export class LcuReportingPowerbiViewElementComponent
  extends LcuElementComponent<LcuReportingPowerbiViewContext>
  implements OnInit {
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
