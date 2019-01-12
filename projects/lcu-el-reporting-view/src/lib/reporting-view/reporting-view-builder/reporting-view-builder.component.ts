import { ReportingService } from '@lcu/daf-common';
import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeReportingViewDetails, ForgeReportingViewConfig } from '../reporting-view.core';
import { isResultSuccess, Loading } from '@lcu/core';

@Component({
	selector: 'forge-reporting-view-builder',
	templateUrl: './reporting-view-builder.component.html',
	styleUrls: ['./reporting-view-builder.component.scss']
})
export class ForgeReportingViewBuilderComponent
	extends ForgeGenericControl<ForgeReportingViewDetails, ForgeReportingViewConfig>
	implements IControlBuilder<ForgeReportingViewDetails, ForgeReportingViewConfig> {
		//  Fields
	
		//  Properties
		public get DashboardKeys(): string[] {
			return Object.keys(this.Dashboards);
		};
	
		public Dashboards: { [id: string]: string };
	
		public Loading: Loading;
	
		public get ReportKeys(): string[] {
			return Object.keys(this.Reports);
		};
	
		public Reports: { [id: string]: string };
	
		public get TileKeys(): string[] {
			return Object.keys(this.Tiles);
		};
	
		public Tiles: { [id: string]: string };
	
		//  Constructors
		constructor(protected injector: Injector, protected reportingSvc: ReportingService) {
			super(injector);
	
			this.Loading = new Loading();
	
			this.Dashboards = {};
	
			this.Reports = {};
	
			this.Tiles = null;
		}
	
		//	Life Cycle
		public ngOnInit() {
			super.ngOnInit();
	
			this.loadDashboards();
	
			this.loadReports();
	
			if (this.Details.DashboardLookup) {
				this.loadTiles();
			}       
		}
	
		//	API Methods
		public ClearConfig() {
			this.Details.EmbedLookup = '';
	
			this.Details.IsTile = false;
		}
	
		public HandleIsTileChange(isTile: boolean) {
			if (isTile) {
				this.Details.EmbedLookup = '';
			} else {
				this.Details.EmbedLookup = this.Details.DashboardLookup;
	
			}
		}
	
		public SetActiveDashboard(lookup: string) {
			if (lookup) {
				this.Details.DashboardLookup = lookup;
	
				this.loadTiles();
			} else {
				this.Details.DashboardLookup = null;
	
				this.Details.IsTile = false;
	
				this.Tiles = null;
			}
		}
	
		//	Helpers
		protected loadDashboards() {
			this.Loading.Set(true);
	
			this.reportingSvc.ListDashboards().subscribe(
				(result) => {
					if (isResultSuccess(result)) {
						this.Dashboards = result.Model;
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
	
		protected loadTiles() {
			this.Loading.Set(true);
	
			this.reportingSvc.ListTiles(this.Details.DashboardLookup).subscribe(
				(result) => {
					if (isResultSuccess(result)) {
						this.Tiles = result.Model;
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
}
