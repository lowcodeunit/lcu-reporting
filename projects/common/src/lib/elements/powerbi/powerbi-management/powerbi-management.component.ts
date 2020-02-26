import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';
//import { PowerBIConfig, ReportingConfig } from '@lcu/apps';
import { FormGroup, FormControl } from '@angular/forms';
import { PowerBIModel } from '../../../models/powerbi.model';


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

  public PowerBIFormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    apiUrl: new FormControl(),
    authorityUrl: new FormControl(),
    clientId: new FormControl(),
    groupId: new FormControl(),
    resourceUrl: new FormControl(),
  });

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
  protected buildPowerBIConfigFromForm(): PowerBIModel {
    return {
        Username: this.PowerBIFormGroup.get('username').value, //|| this.CurrentPowerBIConfig.Username,
        Password: this.PowerBIFormGroup.get('password').value, //|| this.CurrentPowerBIConfig.Password,
        ApiUrl: this.PowerBIFormGroup.get('apiUrl').value, //|| this.CurrentPowerBIConfig.ApiUrl,
        AuthorityUrl: this.PowerBIFormGroup.get('authorityUrl').value, //|| this.CurrentPowerBIConfig.AuthorityUrl,
        ClientID: this.PowerBIFormGroup.get('clientId').value, //|| this.CurrentPowerBIConfig.ClientID,
        GroupID: this.PowerBIFormGroup.get('groupId').value, //|| this.CurrentPowerBIConfig.GroupID,
        ResourceUrl: this.PowerBIFormGroup.get('resourceUrl').value //|| this.CurrentPowerBIConfig.ResourceUrl,
    };                               
}
}
