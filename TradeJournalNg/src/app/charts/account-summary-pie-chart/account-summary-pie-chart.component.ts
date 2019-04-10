import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-summary-pie-chart',
  templateUrl: './account-summary-pie-chart.component.html',
  styleUrls: ['./account-summary-pie-chart.component.css']
})
export class AccountSummaryPieChartComponent implements OnInit {

  constructor() { }

  pieChartData: number[] = [300, 400];
  pieChartLabels : string[] = ["Green", "GTCAP"];
  pieChartType: string =  "doughnut";
  colors: any[] = ["black", "green"];
  
  ngOnInit() {
  }

}
