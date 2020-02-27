import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import { LcuModel } from '../models/lcu.model';
import { ReportingManagementState } from './reporting-management.state';
import { PowerBIModel } from '../models/powerbi.model';

@Injectable({
    providedIn: 'root'
})
export class ReportingManagementStateContext extends StateContext<ReportingManagementState> {

    // protected State: LcuModel;

    constructor(protected injector: Injector) {
        super(injector);
    }

    public SavePowerBIConnection(powerBi: PowerBIModel): void {
        this.Execute({
            Arguments: {
                PowerBI: powerBi
            },
            Type: 'SavePowerBIConnection'
        });
    }

    protected async loadStateKey() {
        return 'main';
    }

    protected async loadStateName() {
        return 'lcu';
    }
}
