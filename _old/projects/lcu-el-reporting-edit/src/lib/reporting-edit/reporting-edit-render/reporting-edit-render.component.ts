import { Component, Injector, ElementRef } from '@angular/core';
import { IControlRender } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { EmbedConfig } from '@lcu/apps';
import { ForgeReportingEditDetails, ForgeReportingEditConfig } from '../reporting-edit.core';
import { Observable } from 'rxjs';
import * as pbi from 'powerbi-client';
import { ReportingService } from '@lcu/daf-common';
import { BaseModeledResponse, isResultSuccess } from '@lcu/core';

@Component({
	selector: 'forge-reporting-edit-render',
	templateUrl: './reporting-edit-render.component.html',
	styleUrls: ['./reporting-edit-render.component.scss']
})
export class ForgeReportingEditRenderComponent
	extends ForgeGenericControl<ForgeReportingEditDetails, ForgeReportingEditConfig>
	implements IControlRender<ForgeReportingEditDetails, ForgeReportingEditConfig> {

	//  Fields
	protected powerBi: any;

	protected embedUrl: string = "https://embedded.powerbi.com/ReportEmbed";

	//  Properties

	//  Constructors
	constructor(protected injector: Injector, protected reportingSvc: ReportingService, protected elm: ElementRef) {
		super(injector);

		this.powerBi = window['powerbi'];

	}

	//	Life Cycle
	public ngOnInit() {
		super.ngOnInit();

		this.loadEmbedConfig();

		if (this.Details.DatasetLookup) {
			this.newReport();
		}
	}

	//	API Methods

	//	Helpers
	protected loadEmbedConfig() {
		var obs: Observable<BaseModeledResponse<EmbedConfig>> = this.reportingSvc.LoadReportConfig(this.Details.EmbedLookup);

		if (obs)
			obs.subscribe(
				(result) => {
					if (isResultSuccess(result)) {
						if (this.Details.CreateOrEdit)
							var config = {
								type: 'report',
								id: result.Model.ID,
								embedUrl: result.Model.EmbedURL,
								tokenType: pbi.models.TokenType.Embed,
								permissions: pbi.models.Permissions.All,
								viewMode: pbi.models.ViewMode.Edit,
								settings: {
									filterPaneEnabled: true,
									navContentPaneEnabled: true,
									customLayout: {
										pageSize: {
											type: pbi.models.PageSizeType.Custom,
											width: this.Details
										}
									}
								},
								accessToken: result.Model.EmbedToken.Token
							};

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

	protected newReport() {
		var obs: Observable<BaseModeledResponse<EmbedConfig>> = this.reportingSvc.HandleNewReport(this.Details.DatasetLookup);

		obs.subscribe(
			(result) => {
				if (isResultSuccess(result)) {
					var config = {
						embedUrl: this.embedUrl,
						tokenType: pbi.models.TokenType.Embed,
						accessToken: result.Model.EmbedToken.Token,
						datasetId: this.Details.DatasetLookup,
					};

					this.powerBi.createReport(this.elm.nativeElement, config);
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
