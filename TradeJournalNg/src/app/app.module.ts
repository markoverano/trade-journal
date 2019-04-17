import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule } from "@angular/common/http";
import { appRoutes } from '../app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { JournalComponent } from './dashboard/journal/journal.component';
import { Journal } from './shared/models/journal-entries.model';
import { CalcComponent } from './dashboard/calc/calc.component';
import { AccountComponent } from './dashboard/account/account.component';

import { AccountPerformanceChartComponent } from './dashboard/charts/account-performance-chart/account-performance-chart.component';
import { AccountSummaryPieChartComponent } from './dashboard/charts/account-summary-pie-chart/account-summary-pie-chart.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountSummaryPieChartComponent,
    JournalComponent,
    AccountPerformanceChartComponent,
    CalcComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [CalcComponent],
  providers: [Journal],
  bootstrap: [AppComponent]
})
export class AppModule { }
