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

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { JournalComponent } from './journal/journal.component';
import { Journal } from './shared/models/journal-entries.model';
import { CalcComponent } from './calc/calc.component';
import { AccountComponent } from './account/account.component';
import { FundComponent } from './account/fund/fund.component';

import { AccountPerformanceChartComponent } from './charts/account-performance-chart/account-performance-chart.component';
import { AccountSummaryPieChartComponent } from './charts/account-summary-pie-chart/account-summary-pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AccountComponent,
    AccountSummaryPieChartComponent,
    FundComponent,
    JournalComponent,
    AccountPerformanceChartComponent,
    CalcComponent
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
