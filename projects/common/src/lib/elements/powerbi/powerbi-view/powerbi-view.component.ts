import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
import { ReportingViewStateContext } from '../../../state/reporting-view-state.context'
import { ReportingViewState } from '../../../state/reporting-view.state';

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
  protected reportingMgr: ReportingViewStateContext;

  //  Properties

  /**
  * State mechanism
  */
  public State: ReportingViewState;

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);

    this.reportingMgr = injector.get(ReportingViewStateContext);

    this.State = {};
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();

    this.reportingMgr.Context.subscribe(state => {
      this.State = state;

      this.stateChanged();
    });
  }

  //  API Methods
  public LoadDashboards() {
    // Add some logic

    this.State.Loading = true;

  }

  public LoadReports() {
    // Add some logic

    this.State.Loading = true;

  }

  public LoadTiles() {
    // Add some logic

    this.State.Loading = true;

  }
  //  Helpers
  protected stateChanged() {
    // use change detection to prevent ExpressionChangedAfterItHasBeenCheckedError, when
    // using *ngIf with external form properties
    // this.cdr.detectChanges();
    // if (this.State.Step === UserManagementStepTypes.Complete) {
    // }
  }
}
