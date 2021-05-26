import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { AppHostModule } from '@lowcodeunit/app-host-common';
import { LcuReportingModule } from '@lowcodeunit/lcu-reporting-common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './controls/home/home.component';
import { PowerBIViewTestComponent } from './controls/power-bi-view-test/power-bi-view-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PowerBIViewTestComponent
  ],
  imports: [
  AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule.forRoot(),
    MaterialModule,
    FlexLayoutModule,
    AppHostModule.forRoot(),
    LcuReportingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
