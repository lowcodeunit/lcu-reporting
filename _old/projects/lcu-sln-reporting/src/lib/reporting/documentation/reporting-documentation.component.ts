import { Component, Injector } from '@angular/core';
import { ISolutionControl, ForgeGenericSolution } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-reporting-documentation',
	templateUrl: './reporting-documentation.component.html',
	styleUrls: ['./reporting-documentation.component.scss']
})
export class ForgeReportingSolutionDocumentation extends ForgeGenericSolution
	implements ISolutionControl {
	//  Fields

	//  Properties
	public DocsRoot: string;

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);

		this.DocsRoot = 'https://raw.githubusercontent.com/lowcodeunit/lcu-sln-reporting/master/docs/';
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
