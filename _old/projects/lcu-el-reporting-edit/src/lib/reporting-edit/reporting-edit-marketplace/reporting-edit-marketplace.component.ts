import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeReportingEditDetails, ForgeReportingEditConfig } from '../reporting-edit.core';

@Component({
	selector: 'forge-reporting-edit-marketplace',
	templateUrl: './reporting-edit-marketplace.component.html',
	styleUrls: ['./reporting-edit-marketplace.component.scss']
})
export class ForgeReportingEditMarketplaceComponent
	extends ForgeGenericControl<ForgeReportingEditDetails, ForgeReportingEditConfig>
	implements IControlMarketplace<ForgeReportingEditDetails, ForgeReportingEditConfig> {
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
