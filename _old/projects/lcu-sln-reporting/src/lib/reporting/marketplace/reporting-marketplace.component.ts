import { Component, Injector } from '@angular/core';
import { ForgeGenericSolution, ISolutionControl } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-reporting-marketplace',
	templateUrl: './reporting-marketplace.component.html',
	styleUrls: ['./reporting-marketplace.component.scss']
})
export class ForgeReportingSolutionMarketplace extends ForgeGenericSolution
	implements ISolutionControl {
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
