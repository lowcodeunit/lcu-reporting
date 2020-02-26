import { NgModule } from "@angular/core";
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatPaginatorModule,
  MatTableModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FathymSharedModule } from "@lcu/hosting";
import { BaseSolutionModule } from "@lcu/solutions";
import { NgxMarkdownDocsModule } from "@lowcodeunit/ngx-markdown-docs";
import { ForgeReportingSolutionManage } from "./manage/reporting-manage.component";
import { ForgeReportingSolutionDocumentation } from "./documentation/reporting-documentation.component";
import { ForgeReportingSolutionHeading } from "./heading/reporting-heading.component";
import { ForgeReportingSolutionMarketplace } from "./marketplace/reporting-marketplace.component";
import { ForgeReportingSolutionOverview } from "./overview/reporting-overview.component";
import { ReactiveFormsModule } from "@angular/forms";

export class ForgeReportingSolutionDisplayModule extends BaseSolutionModule {
  public Documentation() {
    return ForgeReportingSolutionDocumentation;
  }

  public Heading() {
    return ForgeReportingSolutionHeading;
  }

  public Manage() {
    return ForgeReportingSolutionManage;
  }

  public Marketplace() {
    return ForgeReportingSolutionMarketplace;
  }

  public Overview() {
    return ForgeReportingSolutionOverview;
  }
}

var comps = [
  ForgeReportingSolutionDocumentation,
  ForgeReportingSolutionHeading,
  ForgeReportingSolutionManage,
  ForgeReportingSolutionMarketplace,
  ForgeReportingSolutionOverview
];

@NgModule({
  imports: [
    FathymSharedModule,
    NgxMarkdownDocsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  declarations: [...comps],
  exports: [...comps],
  entryComponents: [...comps]
})
export class ForgeReportingSolutionModule {}
