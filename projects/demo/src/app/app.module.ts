import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule, LCUServiceSettings } from '@lcu/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './controls/home/home.component';
import { DocumentationComponent } from './controls/documentation/documentation.component';
import { LcuDocumentationModule } from '@lowcodeunit/lcu-documentation-common';
import { LcuReportingModule } from '@lowcodeunit/lcu-reporting-common';
import { environment } from '../environments/environment';
import { ReportingManagementStateContext } from 'projects/common/src/lcu.api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocumentationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    MaterialModule,
    FlexLayoutModule,
    LcuDocumentationModule.forRoot(),
    LcuReportingModule.forRoot()
  ],
  providers: [ReportingManagementStateContext,{
    provide: LCUServiceSettings,
    useValue: FathymSharedModule.DefaultServiceSettings(environment)
  }],
  bootstrap: [AppComponent],
  exports: [LcuReportingModule]
})
export class AppModule { }
