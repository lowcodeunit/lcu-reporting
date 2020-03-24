import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import { LcuModel } from '../models/lcu.model';
import { ReportingManagementState } from './reporting-management.state';
import { PowerBIManageModel } from '../models/powerbi-manage.model';

@Injectable({
    providedIn: 'root'
})
export class ReportingManagementStateContext extends StateContext<ReportingManagementState> {

    // protected State: LcuModel;

    constructor(protected injector: Injector) {
        super(injector);
    }

    public SavePowerBIConnection(powerBi: PowerBIManageModel): void {
        this.Execute({
            Arguments: {
                PowerBI: powerBi
            },
            Type: 'SavePowerBIConnection' 
        });
    }

    protected loadStateKey():string {
        return 'main';
    }
 
    protected loadStateName():string {
        return 'lcu';
    }
}
