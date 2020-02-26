import { Component, ElementRef, Injector } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ReportingService } from '@lcu/daf-common';
import { EmbedConfig } from '@lcu/apps';
import { ForgeReportingViewDetails, ForgeReportingViewConfig } from '../reporting-view.core';
import * as pbi from 'powerbi-client';
import { Observable } from 'rxjs';
import { BaseModeledResponse, isResultSuccess } from '@lcu/core';

@Component({
	selector: 'forge-reporting-view-render',
	templateUrl: './reporting-view-render.component.html',
	styleUrls: ['./reporting-view-render.component.scss']
})
export class ForgeReportingViewRenderComponent
	extends ForgeGenericControl<ForgeReportingViewDetails, ForgeReportingViewConfig>
	implements IControlRender<ForgeReportingViewDetails, ForgeReportingViewConfig> {
	//  Fields
	protected powerBi: any;

	//  Properties

	//  Constructors
	constructor(protected injector: Injector, protected reportingSvc: ReportingService, protected elm: ElementRef) {
		super(injector);

		this.powerBi = window['powerbi'];

		this.StyleDisplay = 'block';
	}

	//	Life Cycle
	public ngOnInit() {
		if (!this.Details.Height) {
			this.Details.Height = '350px';
		}

		super.ngOnInit();

		this.loadEmbedConfig();
	}

	//	API Methods

	//	Helpers
	//protected controlChanged() {
	//    super.controlChanged();

	//}

	protected loadEmbedConfig() {
		var embedType = this.Details.IsTile ? 'Tile' : this.Details.ReportingType;

		var obs: Observable<BaseModeledResponse<EmbedConfig>> = null;

		switch (embedType) {
			case 'Dashboard':
				obs = this.reportingSvc.LoadDashboardConfig(this.Details.DashboardLookup);
				break;

			case 'Report':
				obs = this.reportingSvc.LoadReportConfig(this.Details.EmbedLookup);
				break;

			case 'Tile':
				obs = this.reportingSvc.LoadTileConfig(this.Details.EmbedLookup, this.Details.DashboardLookup);
				break;
		}

		if (obs)
			obs.subscribe(
				(result) => {
					if (isResultSuccess(result)) {
						if (embedType == 'Tile') {
							var config = {
								type: embedType.toLowerCase(),
								id: result.Model.ID,
								embedUrl: result.Model.EmbedURL,
								tokenType: pbi.models.TokenType.Embed,
								settings: {
									filterPaneEnabled: true,
									navContentPaneEnabled: true,
								},
								accessToken: result.Model.EmbedToken.Token,
								dashboardId: this.Details.DashboardLookup.toString(),
							};
						}

						else {
							var config = {
								type: embedType.toLowerCase(),
								id: result.Model.ID,
								embedUrl: result.Model.EmbedURL,
								tokenType: pbi.models.TokenType.Embed,
								settings: {
									filterPaneEnabled: true,
									navContentPaneEnabled: true,
								},
								accessToken: result.Model.EmbedToken.Token,
								dashboardId: '',
							};
						}

						this.powerBi.embed(this.elm.nativeElement, config);
					} else {

					}
				},
				(err) => {
					console.log(err);
				},
				() => {
				});
	}
}
