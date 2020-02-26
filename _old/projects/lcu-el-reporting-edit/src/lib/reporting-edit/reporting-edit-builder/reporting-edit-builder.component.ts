import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeReportingEditDetails, ForgeReportingEditConfig } from '../reporting-edit.core';
import { isResultSuccess, Loading } from '@lcu/core';
import { ReportingService } from '@lcu/daf-common';

@Component({
	selector: 'forge-reporting-edit-builder',
	templateUrl: './reporting-edit-builder.component.html',
	styleUrls: ['./reporting-edit-builder.component.scss']
})
export class ForgeReportingEditBuilderComponent
	extends ForgeGenericControl<ForgeReportingEditDetails, ForgeReportingEditConfig>
	implements IControlBuilder<ForgeReportingEditDetails, ForgeReportingEditConfig> {
		//  Fields
	
		//  Properties
		public get DatasetKeys(): string[] {
			return Object.keys(this.Datasets)
		}
	
		public Datasets: { [id: string]: string };
	
		public Loading: Loading;
	
		public get ReportKeys(): string[] {
			return Object.keys(this.Reports);
		};
	
		public Reports: { [id: string]: string };
	
		//  Constructors
		constructor(protected injector: Injector, protected reportingSvc: ReportingService) {
			super(injector);
	
			this.Loading = new Loading();
	
			this.Reports = {};
	
			this.Datasets = {};
		}
	
		//	Life Cycle
		public ngOnInit() {
			super.ngOnInit();
	
			this.loadReports();
	
			this.loadDatasets();
		}
		//	API Methods
		public ClearConfig() {
			this.Details.EmbedLookup = '';
	
			this.Details.IsTile = false;
		}
	
		//	Helpers
		protected loadDatasets() {
			this.Loading.Set(true);
	
			this.reportingSvc.ListDatasets().subscribe(
				(result) => {
					if (isResultSuccess(result)) {
						this.Datasets = result.Model;
					} else {
						console.log(result);
	
						this.pgUiSvc.Notify.Signal(result.Status.Message);
					}
				},
				(err) => {
					console.log(err);
				},
				() => {
					this.Loading.Set(false);
				});
		}
	
		protected loadReports() {
			this.Loading.Set(true);
	
			this.reportingSvc.ListReports().subscribe(
				(result) => {
					if (isResultSuccess(result)) {
						this.Reports = result.Model;
					} else {
						console.log(result);
	
						this.pgUiSvc.Notify.Signal(result.Status.Message);
					}
				},
				(err) => {
					console.log(err);
				},
				() => {
					this.Loading.Set(false);
				});
		}
	
		//	Helpers
}
