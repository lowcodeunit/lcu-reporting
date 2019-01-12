import { NgModule } from '@angular/core';
import { ForgeReportingEditBuilderComponent } from './reporting-edit-builder/reporting-edit-builder.component';
import { ForgeReportingEditMarketplaceComponent } from './reporting-edit-marketplace/reporting-edit-marketplace.component';
import { ForgeReportingEditRenderComponent } from './reporting-edit-render/reporting-edit-render.component';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatProgressSpinnerModule, MatStepperModule, MatRadioModule, MatOptionModule, MatSlideToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';

export class ForgeReportingEditDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeReportingEditBuilderComponent;
	}

	public Marketplace() {
		return ForgeReportingEditMarketplaceComponent;
	}

	public Render() {
		return ForgeReportingEditRenderComponent;
	}
}

var comps = [
	ForgeReportingEditBuilderComponent,
	ForgeReportingEditMarketplaceComponent,
	ForgeReportingEditRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MatButtonModule,
		MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatStepperModule,
        MatSelectModule,
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
export class ForgeReportingEditModule { }
