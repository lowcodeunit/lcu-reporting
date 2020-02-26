import { NgModule } from '@angular/core';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';
import { ForgeReportingViewBuilderComponent } from './reporting-view-builder/reporting-view-builder.component';
import { ForgeReportingViewMarketplaceComponent } from './reporting-view-marketplace/reporting-view-marketplace.component';
import { ForgeReportingViewRenderComponent } from './reporting-view-render/reporting-view-render.component';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatProgressSpinnerModule, MatStepperModule, MatOptionModule, MatSlideToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

export class ForgeReportingViewDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeReportingViewBuilderComponent;
	}

	public Marketplace() {
		return ForgeReportingViewMarketplaceComponent;
	}

	public Render() {
		return ForgeReportingViewRenderComponent;
	}
}

var comps = [
	ForgeReportingViewBuilderComponent,
	ForgeReportingViewMarketplaceComponent,
	ForgeReportingViewRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
        MatProgressSpinnerModule,
        MatOptionModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatStepperModule,
	],
	declarations: [
		...comps,
	],
	exports: [
		...comps,
	],
	entryComponents: [
		...comps,
	]
})
export class ForgeReportingViewModule { }
