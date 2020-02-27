import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import { LcuModel } from '../models/lcu.model';
import { ReportingManagementState } from './reporting-management.state';
import { PowerBIViewModel } from '../models/powerbi-view.model';
import { ReportingViewState } from './reporting-view.state';

@Injectable({
    providedIn: 'root'
})
export class ReportingViewStateContext extends StateContext<ReportingViewState> {

    // protected State: LcuModel;

    constructor(protected injector: Injector) {
        super(injector);
    }

    public LoadDashboards(powerBi: PowerBIViewModel): void {
        this.Execute({
            Arguments: {
                PowerBI: powerBi
            },
            Type: 'LoadDashboards' 
        });
    }

    public LoadReports(powerBi: PowerBIViewModel): void {
        this.Execute({
            Arguments: {
                PowerBI: powerBi
            },
            Type: 'LoadReports' 
        });
    }

    public LoadTiles(powerBi: PowerBIViewModel): void {
        this.Execute({
            Arguments: {
                PowerBI: powerBi
            },
            Type: 'LoadTiles' 
        });
    }

    protected async loadStateKey() {
        return 'main';
    }

    protected async loadStateName() {
        return 'lcu';
    }
}
