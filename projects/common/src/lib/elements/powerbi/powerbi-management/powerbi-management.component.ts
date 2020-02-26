import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
// import { PowerBIConfig, ReportingConfig } from '@lcu/apps';
import { FormGroup, FormControl } from '@angular/forms';
import { PowerBIModel } from '../../../models/powerbi.model';
import { ReportingManagementStateContext } from '../../../state/reporting-management-state.context';
import { inject } from '@angular/core/testing';
import { ReportingManagementState } from '../../../state/reoprting-management.state';

export class LcuReportingPowerbiManagementElementState {}

export class LcuReportingPowerbiManagementContext extends LCUElementContext<
  LcuReportingPowerbiManagementElementState
> {}

export const SELECTOR_LCU_REPORTING_POWERBI_MANAGEMENT_ELEMENT =
  'lcu-reporting-powerbi-management-element';

@Component({
  selector: SELECTOR_LCU_REPORTING_POWERBI_MANAGEMENT_ELEMENT,
  templateUrl: './powerbi-management.component.html',
  styleUrls: ['./powerbi-management.component.scss']
})
export class LcuReportingPowerbiManagementElementComponent
  extends LcuElementComponent<LcuReportingPowerbiManagementContext>
  implements OnInit {
  //  Fields
  protected reportingMgr: ReportingManagementStateContext;

  //  Properties

  public PowerBIFormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    apiUrl: new FormControl(),
    authorityUrl: new FormControl(),
    clientId: new FormControl(),
    groupId: new FormControl(),
    resourceUrl: new FormControl()
  });

  /**
   * State mechanism
   */
  public State: ReportingManagementState;

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);

    this.reportingMgr = injector.get(ReportingManagementStateContext);

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

  //  Helpers
  protected buildPowerBIConfigFromForm(): PowerBIModel {
    return {
      Username: this.PowerBIFormGroup.get('username').value, // || this.CurrentPowerBIConfig.Username,
      Password: this.PowerBIFormGroup.get('password').value, // || this.CurrentPowerBIConfig.Password,
      ApiUrl: this.PowerBIFormGroup.get('apiUrl').value, // || this.CurrentPowerBIConfig.ApiUrl,
      AuthorityUrl: this.PowerBIFormGroup.get('authorityUrl').value, // || this.CurrentPowerBIConfig.AuthorityUrl,
      ClientID: this.PowerBIFormGroup.get('clientId').value, // || this.CurrentPowerBIConfig.ClientID,
      GroupID: this.PowerBIFormGroup.get('groupId').value, // || this.CurrentPowerBIConfig.GroupID,
      ResourceUrl: this.PowerBIFormGroup.get('resourceUrl').value // || this.CurrentPowerBIConfig.ResourceUrl,
    };
  }

  protected setPowerBIFormFromConfig(powerBi: PowerBIModel) {
    this.PowerBIFormGroup.controls.username.setValue(powerBi.Username);

    this.PowerBIFormGroup.controls.password.setValue(powerBi.Password);

    this.PowerBIFormGroup.controls.apiUrl.setValue(powerBi.ApiUrl);

    this.PowerBIFormGroup.controls.authorityUrl.setValue(powerBi.AuthorityUrl);

    this.PowerBIFormGroup.controls.clientId.setValue(powerBi.ClientID);

    this.PowerBIFormGroup.controls.usergroupIdname.setValue(powerBi.GroupID);

    this.PowerBIFormGroup.controls.resourceUrl.setValue(powerBi.ResourceUrl);
  }

  protected stateChanged() {
    // use change detection to prevent ExpressionChangedAfterItHasBeenCheckedError, when
    // using *ngIf with external form properties
    // this.cdr.detectChanges();
    // if (this.State.Step === UserManagementStepTypes.Complete) {
    // }

    if (this.State.PowerBI) {
      // && !this.PowerBIFormGroup.dirty
      this.setPowerBIFormFromConfig(this.State.PowerBI);
    }
  }
}
