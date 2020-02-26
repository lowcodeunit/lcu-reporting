import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeReportingViewDetails, ForgeReportingViewConfig } from '../reporting-view.core';

@Component({
	selector: 'forge-reporting-view-marketplace',
	templateUrl: './reporting-view-marketplace.component.html',
	styleUrls: ['./reporting-view-marketplace.component.scss']
})
export class ForgeReportingViewMarketplaceComponent
	extends ForgeGenericControl<ForgeReportingViewDetails, ForgeReportingViewConfig>
	implements IControlMarketplace<ForgeReportingViewDetails, ForgeReportingViewConfig> {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
